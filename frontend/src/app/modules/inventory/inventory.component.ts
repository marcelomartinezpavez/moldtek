import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { BranchDto } from '../../core/models/company.model';
import { MaterialDto } from '../../core/models/material.model';

// ── Dialog: actualizar stock de un item ya existente en inventario ────────────
@Component({
  selector: 'app-stock-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title><mat-icon>edit</mat-icon> Actualizar Stock</h2>
    <mat-dialog-content>
      <p><strong>{{ data.item.materialName }}</strong> — {{ data.branchName }}</p>
      <form [formGroup]="form" style="display:flex;flex-direction:column;gap:0;min-width:320px">
        <mat-form-field appearance="outline">
          <mat-label>Cantidad actual *</mat-label>
          <input matInput type="number" formControlName="quantity" min="0" step="0.01">
          <span matSuffix>{{ data.item.materialUnit }}</span>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Stock mínimo</mat-label>
          <input matInput type="number" formControlName="minimumStock" min="0" step="0.01">
          <mat-hint>Se mostrará alerta si cae por debajo de este valor</mat-hint>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Actualizar' }}
      </button>
    </mat-dialog-actions>
  `
})
export class StockUpdateFormComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private dialogRef = inject(MatDialogRef<StockUpdateFormComponent>);
  data: { item: any; branchId: number; branchName: string } = inject(MAT_DIALOG_DATA);

  saving = false;
  form = this.fb.group({
    quantity:     [this.data.item.quantity, [Validators.required, Validators.min(0)]],
    minimumStock: [this.data.item.minimumStock ?? 0]
  });

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const { quantity, minimumStock } = this.form.value;
    this.api.updateStock(this.data.branchId, this.data.item.materialId, quantity!, minimumStock ?? undefined).subscribe({
      next: () => { this.notify.success('Stock actualizado'); this.dialogRef.close(true); },
      error: err => { this.notify.error(err.message); this.saving = false; }
    });
  }
}

// ── Dialog: ingresar stock inicial para un material del catálogo ──────────────
@Component({
  selector: 'app-stock-entry-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatAutocompleteModule, MatButtonModule, MatIconModule
  ],
  template: `
    <h2 mat-dialog-title><mat-icon>add_box</mat-icon> Ingresar Stock</h2>
    <mat-dialog-content>
      <p style="margin:0 0 12px;color:rgba(0,0,0,.6)">Sucursal: <strong>{{ data.branchName }}</strong></p>
      <form [formGroup]="form" style="display:flex;flex-direction:column;gap:0;min-width:360px">

        <mat-form-field appearance="outline">
          <mat-label>Material *</mat-label>
          <input matInput [formControl]="materialCtrl" [matAutocomplete]="auto"
                 placeholder="Buscar por código o nombre...">
          <mat-icon matSuffix>search</mat-icon>
          <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayMaterial"
                            (optionSelected)="onMaterialSelected()">
            @for (m of filteredMaterials(); track m.id) {
              <mat-option [value]="m">
                <span style="font-weight:600">{{ m.code }}</span> — {{ m.name }}
                <span style="color:rgba(0,0,0,.4);font-size:.8rem;margin-left:4px">({{ m.unitOfMeasure }})</span>
              </mat-option>
            }
            @if (filteredMaterials().length === 0) {
              <mat-option disabled>Sin resultados</mat-option>
            }
          </mat-autocomplete>
          @if (form.get('materialId')?.invalid && form.get('materialId')?.touched) {
            <mat-error>Selecciona un material de la lista</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Cantidad *</mat-label>
          <input matInput type="number" formControlName="quantity" min="0" step="0.01">
          <span matSuffix>{{ selectedUnit() }}</span>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Stock mínimo</mat-label>
          <input matInput type="number" formControlName="minimumStock" min="0" step="0.01">
          <mat-hint>Alerta cuando el stock caiga bajo este valor</mat-hint>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="!canSave() || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Ingresar' }}
      </button>
    </mat-dialog-actions>
  `
})
export class StockEntryFormComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private dialogRef = inject(MatDialogRef<StockEntryFormComponent>);
  data: { branchId: number; branchName: string; materials: MaterialDto[] } = inject(MAT_DIALOG_DATA);

  saving = false;
  materialCtrl = new FormControl<string | MaterialDto>('');
  form = this.fb.group({
    materialId:   [null as number | null, Validators.required],
    quantity:     [null as number | null, [Validators.required, Validators.min(0)]],
    minimumStock: [0]
  });

  private searchValue = toSignal(
    this.materialCtrl.valueChanges.pipe(startWith('')),
    { initialValue: '' }
  );

  filteredMaterials = computed(() => {
    const raw = this.searchValue();
    const q = typeof raw === 'string' ? raw.toLowerCase() : '';
    return this.data.materials
      .filter(m => m.name.toLowerCase().includes(q) || m.code.toLowerCase().includes(q))
      .slice(0, 30);
  });

  selectedUnit = computed(() => {
    const raw = this.searchValue();
    if (raw && typeof raw === 'object') return (raw as MaterialDto).unitOfMeasure ?? '';
    return '';
  });

  displayMaterial = (m: MaterialDto | string | null): string => {
    if (!m) return '';
    if (typeof m === 'string') return m;
    return `${m.code} — ${m.name}`;
  };

  onMaterialSelected(): void {
    const val = this.materialCtrl.value;
    if (val && typeof val === 'object') {
      this.form.patchValue({ materialId: (val as MaterialDto).id });
    }
  }

  canSave(): boolean {
    const matId = this.form.value.materialId;
    const qty = this.form.value.quantity;
    return !!matId && qty !== null && qty !== undefined && qty >= 0;
  }

  save(): void {
    if (!this.canSave()) return;
    this.saving = true;
    const { materialId, quantity, minimumStock } = this.form.value;
    this.api.updateStock(this.data.branchId, materialId!, quantity!, minimumStock ?? undefined).subscribe({
      next: () => { this.notify.success('Stock ingresado correctamente'); this.dialogRef.close(true); },
      error: err => { this.notify.error(err.message); this.saving = false; }
    });
  }
}

// ── Dialog: transferencia de stock entre sucursales ───────────────────────────
@Component({
  selector: 'app-transfer-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title><mat-icon>swap_horiz</mat-icon> Transferencia de Stock</h2>
    <mat-dialog-content>
      <form [formGroup]="form" style="display:flex;flex-direction:column;gap:0;min-width:420px">
        <mat-form-field appearance="outline">
          <mat-label>Sucursal origen *</mat-label>
          <mat-select formControlName="fromBranchId">
            @for (b of data.branches; track b.id) { <mat-option [value]="b.id">{{ b.name }}</mat-option> }
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Sucursal destino *</mat-label>
          <mat-select formControlName="toBranchId">
            @for (b of data.branches; track b.id) { <mat-option [value]="b.id">{{ b.name }}</mat-option> }
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Material *</mat-label>
          <mat-select formControlName="materialId">
            @for (m of data.materials; track m.id) {
              <mat-option [value]="m.id">{{ m.code }} — {{ m.name }}</mat-option>
            }
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Cantidad *</mat-label>
          <input matInput type="number" formControlName="quantity" min="0.001" step="0.01">
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Notas</mat-label>
          <textarea matInput formControlName="notes" rows="2"></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="accent" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>send</mat-icon> {{ saving ? 'Enviando...' : 'Solicitar transferencia' }}
      </button>
    </mat-dialog-actions>
  `
})
export class TransferFormComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private dialogRef = inject(MatDialogRef<TransferFormComponent>);
  data: { branches: BranchDto[]; materials: MaterialDto[] } = inject(MAT_DIALOG_DATA);

  saving = false;
  form = this.fb.group({
    fromBranchId: [null as number | null, Validators.required],
    toBranchId:   [null as number | null, Validators.required],
    materialId:   [null as number | null, Validators.required],
    quantity:     [null as number | null, [Validators.required, Validators.min(0.001)]],
    notes:        ['']
  });

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    this.api.requestTransfer(this.form.value).subscribe({
      next: () => { this.notify.success('Transferencia solicitada'); this.dialogRef.close(true); },
      error: err => { this.notify.error(err.message); this.saving = false; }
    });
  }
}

// ── Componente principal de Inventario ───────────────────────────────────────
@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatTabsModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatSelectModule, MatChipsModule, MatTooltipModule,
    MatProgressBarModule, MatDialogModule, MatDividerModule, FormsModule, DecimalPipe
  ],
  template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">warehouse</mat-icon>Inventario por Sucursal</h2>
          <div class="header-actions">
            <mat-form-field appearance="outline" style="width:240px" subscriptSizing="dynamic">
              <mat-label>Sucursal</mat-label>
              <mat-select [(ngModel)]="selectedBranch" (ngModelChange)="loadInventory()">
                @for (b of branches(); track b.id) {
                  <mat-option [value]="b.id">{{ b.name }}</mat-option>
                }
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" style="width:200px" subscriptSizing="dynamic">
              <mat-label>Buscar</mat-label>
              <input matInput [(ngModel)]="searchText" (ngModelChange)="applyFilter()" placeholder="Material...">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="openStockEntry()" [disabled]="!selectedBranch"
                    matTooltip="Ingresar stock para un material del catálogo">
              <mat-icon>add</mat-icon> Ingresar stock
            </button>
            <button mat-stroked-button color="accent" (click)="openTransferForm()" [disabled]="branches().length < 2"
                    [matTooltip]="branches().length < 2 ? 'Se necesitan al menos 2 sucursales para transferir' : 'Transferir stock entre sucursales'">
              <mat-icon>swap_horiz</mat-icon> Transferir
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        @if (lowStockCount() > 0) {
          <div style="margin:0 16px 8px;padding:8px 16px;background:#fff3e0;border-left:4px solid #ff9800;border-radius:4px;display:flex;align-items:center;gap:8px">
            <mat-icon style="color:#ff9800">warning</mat-icon>
            <span><strong>{{ lowStockCount() }}</strong> material(es) con stock bajo el mínimo en esta sucursal</span>
          </div>
        }

        <div class="table-wrapper">
          <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="code">
              <th mat-header-cell *matHeaderCellDef>Código</th>
              <td mat-cell *matCellDef="let row"><strong>{{ row.materialCode }}</strong></td>
            </ng-container>
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Material</th>
              <td mat-cell *matCellDef="let row">{{ row.materialName }}</td>
            </ng-container>
            <ng-container matColumnDef="category">
              <th mat-header-cell *matHeaderCellDef>Categoría</th>
              <td mat-cell *matCellDef="let row">
                @if (row.categoryName) {
                  <mat-chip-set><mat-chip style="font-size:0.7rem">{{ row.categoryName }}</mat-chip></mat-chip-set>
                }
              </td>
            </ng-container>
            <ng-container matColumnDef="quantity">
              <th mat-header-cell *matHeaderCellDef>Stock actual</th>
              <td mat-cell *matCellDef="let row">
                <span [style.color]="row.belowMinimum ? '#f44336' : 'inherit'" [style.fontWeight]="row.belowMinimum ? 700 : 400">
                  {{ row.quantity | number:'1.0-2' }} {{ row.materialUnit }}
                </span>
                @if (row.belowMinimum) {
                  <mat-icon style="font-size:14px;color:#f44336;vertical-align:middle" matTooltip="Stock bajo mínimo">warning</mat-icon>
                }
              </td>
            </ng-container>
            <ng-container matColumnDef="minimum">
              <th mat-header-cell *matHeaderCellDef>Mínimo</th>
              <td mat-cell *matCellDef="let row" class="text-muted">
                {{ row.minimumStock | number:'1.0-2' }} {{ row.materialUnit }}
              </td>
            </ng-container>
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef></th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openStockUpdate(row)" matTooltip="Ajustar stock">
                  <mat-icon>edit</mat-icon>
                </button>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;" [class.low-stock-row]="row.belowMinimum"></tr>
            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell" [attr.colspan]="columns.length">
                <div class="empty-state">
                  <mat-icon>warehouse</mat-icon>
                  @if (!selectedBranch) {
                    <p>Selecciona una sucursal</p>
                  } @else {
                    <p>No hay materiales con stock registrado en esta sucursal</p>
                    <button mat-stroked-button color="primary" (click)="openStockEntry()" style="margin-top:8px">
                      <mat-icon>add</mat-icon> Ingresar el primer stock
                    </button>
                  }
                </div>
              </td>
            </tr>
          </table>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`.low-stock-row { background: #fff8f8; } .text-muted { color: rgba(0,0,0,0.5); }`]
})
export class InventoryComponent implements OnInit {
  private api = inject(ApiService);
  private dialog = inject(MatDialog);
  private notify = inject(NotificationService);

  columns = ['code', 'name', 'category', 'quantity', 'minimum', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  branches = signal<BranchDto[]>([]);
  loading = signal(false);
  lowStockCount = signal(0);
  selectedBranch: number | null = null;
  searchText = '';
  private allInventory: any[] = [];
  private allMaterials: MaterialDto[] = [];

  ngOnInit(): void {
    this.api.getBranches().subscribe(branches => {
      this.branches.set(branches);
      if (branches.length > 0) {
        this.selectedBranch = branches[0].id;
        this.loadInventory();
      }
    });
    this.api.getAllMaterials().subscribe(mats => this.allMaterials = mats);
  }

  loadInventory(): void {
    if (!this.selectedBranch) return;
    this.loading.set(true);
    this.api.getInventory(this.selectedBranch).subscribe({
      next: items => {
        this.allInventory = items;
        this.lowStockCount.set(items.filter((i: any) => i.belowMinimum).length);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  applyFilter(): void {
    const s = this.searchText.toLowerCase();
    this.dataSource.data = s
      ? this.allInventory.filter(i => i.materialName?.toLowerCase().includes(s) || i.materialCode?.toLowerCase().includes(s))
      : [...this.allInventory];
  }

  openStockEntry(): void {
    if (!this.selectedBranch) return;
    const branch = this.branches().find(b => b.id === this.selectedBranch);
    const ref = this.dialog.open(StockEntryFormComponent, {
      width: '440px',
      data: { branchId: this.selectedBranch, branchName: branch?.name, materials: this.allMaterials }
    });
    ref.afterClosed().subscribe(result => { if (result) this.loadInventory(); });
  }

  openStockUpdate(item: any): void {
    const branch = this.branches().find(b => b.id === this.selectedBranch);
    const ref = this.dialog.open(StockUpdateFormComponent, {
      width: '380px',
      data: { item, branchId: this.selectedBranch, branchName: branch?.name }
    });
    ref.afterClosed().subscribe(result => { if (result) this.loadInventory(); });
  }

  openTransferForm(): void {
    const ref = this.dialog.open(TransferFormComponent, {
      width: '480px',
      data: { branches: this.branches(), materials: this.allMaterials }
    });
    ref.afterClosed().subscribe(result => { if (result) this.loadInventory(); });
  }
}
