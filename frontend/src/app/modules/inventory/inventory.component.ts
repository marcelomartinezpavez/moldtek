import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, NgIf, NgFor } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { BranchDto } from '../../core/models/company.model';
import { MaterialDto } from '../../core/models/material.model';

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

@Component({
  selector: 'app-transfer-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, NgFor],
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

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatTabsModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatSelectModule, MatChipsModule, MatTooltipModule,
    MatProgressBarModule, MatDialogModule, FormsModule, DecimalPipe, NgIf
  ],
  template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">warehouse</mat-icon>Inventario por Sucursal</h2>
          <div class="header-actions">
            <mat-form-field appearance="outline" style="width:220px" subscriptSizing="dynamic">
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
            <button mat-raised-button color="accent" (click)="openTransferForm()">
              <mat-icon>swap_horiz</mat-icon> Transferir
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        <!-- Low stock alert -->
        @if (lowStockCount() > 0) {
          <div style="margin:0 16px 8px;padding:8px 16px;background:#fff3e0;border-left:4px solid #ff9800;border-radius:4px;display:flex;align-items:center;gap:8px">
            <mat-icon style="color:#ff9800">warning</mat-icon>
            <span><strong>{{ lowStockCount() }}</strong> materiales con stock bajo el mínimo</span>
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
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openStockUpdate(row)" matTooltip="Actualizar stock">
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
                  <p>{{ selectedBranch ? 'Sin inventario para esta sucursal' : 'Selecciona una sucursal' }}</p>
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
      if (branches.length > 0) { this.selectedBranch = branches[0].id; this.loadInventory(); }
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
