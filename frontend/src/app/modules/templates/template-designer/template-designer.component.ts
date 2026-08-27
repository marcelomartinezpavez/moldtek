import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { NgIf, DecimalPipe } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { TemplateDto, TemplateMaterialDto, CreateTemplateRequest, ProductDto } from '../../../core/models/template.model';
import { MaterialDto } from '../../../core/models/material.model';

@Component({
  selector: 'app-template-designer',
  standalone: true,
  imports: [
    ReactiveFormsModule, FormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule, MatTableModule, MatDividerModule,
    MatProgressBarModule, MatTooltipModule, MatAutocompleteModule,
    NgIf, DecimalPipe
  ],
  template: `
    <div class="page-container">
      <div style="margin-bottom:16px">
        <button mat-button (click)="back()">
          <mat-icon>arrow_back</mat-icon> Volver a Plantillas
        </button>
      </div>

      @if (loading()) { <mat-progress-bar mode="indeterminate" style="margin-bottom:16px" /> }

      <div class="designer-layout">
        <!-- LEFT: Template info -->
        <mat-card class="info-panel">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#7B1FA2">description</mat-icon>
            <mat-card-title>{{ isNew ? 'Nueva Plantilla' : (template()?.name ?? '') }}</mat-card-title>
            <mat-card-subtitle>{{ isNew ? 'Crear plantilla de fabricación' : (template()?.code ?? '') }}</mat-card-subtitle>
          </mat-card-header>

          @if (template()?.imageUrl) {
            <img mat-card-image [src]="template()!.imageUrl!" alt="Imagen" style="max-height:200px;object-fit:cover">
          }

          <mat-card-content>
            <form [formGroup]="infoForm" class="info-form">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Código</mat-label>
                <input matInput formControlName="code" placeholder="Auto-generado si se deja vacío">
                <mat-hint>Ej: TPL-2024-001 — vacío genera automático</mat-hint>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Nombre *</mat-label>
                <input matInput formControlName="name" placeholder="Ej: Puerta Milano 2000x900 Cedro">
                <mat-error>El nombre es requerido</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Producto del catálogo</mat-label>
                <mat-select formControlName="productId">
                  <mat-option [value]="null">Sin vincular</mat-option>
                  @for (p of products(); track p.id) {
                    <mat-option [value]="p.id">{{ p.code }} — {{ p.name }}</mat-option>
                  }
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Descripción</mat-label>
                <textarea matInput formControlName="description" rows="3"
                          placeholder="Descripción detallada..."></textarea>
              </mat-form-field>
            </form>
          </mat-card-content>

          <mat-divider></mat-divider>

          <mat-card-content>
            <div class="upload-section">
              <div class="upload-label">
                <mat-icon>image</mat-icon><span>Imagen de referencia</span>
              </div>
              <input #imgInput type="file" accept="image/*" style="display:none"
                     (change)="onImageSelected($event)">
              <button mat-stroked-button (click)="imgInput.click()" [disabled]="isNew">
                <mat-icon>upload</mat-icon>
                {{ template()?.imageUrl ? 'Cambiar imagen' : 'Subir imagen' }}
              </button>
              @if (isNew) { <small class="text-muted">Guarda la plantilla primero</small> }
            </div>

            <div class="upload-section" style="margin-top:12px">
              <div class="upload-label">
                <mat-icon>attach_file</mat-icon><span>Archivo de programa</span>
              </div>
              @if (template()?.programFileName) {
                <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem">
                  <mat-icon>description</mat-icon>
                  <span>{{ template()!.programFileName }}</span>
                  <a mat-icon-button [href]="template()!.programFileUrl!" target="_blank" matTooltip="Descargar">
                    <mat-icon>download</mat-icon>
                  </a>
                </div>
              }
              <input #progInput type="file" style="display:none" (change)="onProgramSelected($event)">
              <button mat-stroked-button (click)="progInput.click()" [disabled]="isNew">
                <mat-icon>upload</mat-icon>
                {{ template()?.programFileName ? 'Cambiar archivo' : 'Subir programa' }}
              </button>
              @if (isNew) { <small class="text-muted">Guarda la plantilla primero</small> }
            </div>
          </mat-card-content>
        </mat-card>

        <!-- RIGHT: Materials -->
        <mat-card class="materials-panel">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#1976D2">inventory_2</mat-icon>
            <mat-card-title>Lista de Materiales</mat-card-title>
            <mat-card-subtitle>Materiales y cantidades para fabricar UNA unidad</mat-card-subtitle>
          </mat-card-header>

          <mat-card-content>
            <div class="add-material-row">
              <mat-form-field appearance="outline" style="flex:2">
                <mat-label>Buscar material</mat-label>
                <input matInput [formControl]="materialSearch"
                       [matAutocomplete]="auto"
                       placeholder="Escribe código o nombre...">
                <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayMaterial"
                                  (optionSelected)="onMaterialSelected($event)">
                  @for (m of filteredMaterials(); track m.id) {
                    <mat-option [value]="m">
                      <strong>{{ m.code }}</strong> — {{ m.name }}
                      <small class="text-muted" style="margin-left:8px">({{ m.unitOfMeasure }})</small>
                    </mat-option>
                  }
                </mat-autocomplete>
                <mat-icon matPrefix>search</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline" style="flex:1">
                <mat-label>Cantidad</mat-label>
                <input matInput type="number" [(ngModel)]="addQty" min="0.0001" step="0.01">
              </mat-form-field>

              <button mat-raised-button color="accent" (click)="addMaterial()" [disabled]="!selectedMaterial">
                <mat-icon>add</mat-icon> Agregar
              </button>
            </div>

            <div class="table-wrapper" style="margin-top:16px">
              <table mat-table [dataSource]="materialsSource">
                <ng-container matColumnDef="order">
                  <th mat-header-cell *matHeaderCellDef>#</th>
                  <td mat-cell *matCellDef="let row; let i = index">{{ i + 1 }}</td>
                </ng-container>
                <ng-container matColumnDef="code">
                  <th mat-header-cell *matHeaderCellDef>Código</th>
                  <td mat-cell *matCellDef="let row"><strong>{{ row.materialCode }}</strong></td>
                </ng-container>
                <ng-container matColumnDef="name">
                  <th mat-header-cell *matHeaderCellDef>Material</th>
                  <td mat-cell *matCellDef="let row">{{ row.materialName }}</td>
                </ng-container>
                <ng-container matColumnDef="quantity">
                  <th mat-header-cell *matHeaderCellDef>Cantidad</th>
                  <td mat-cell *matCellDef="let row">
                    <input class="qty-input" type="number" [(ngModel)]="row.quantity" min="0.0001" step="0.01">
                    <span class="unit-label">{{ row.unit || row.materialUnit }}</span>
                  </td>
                </ng-container>
                <ng-container matColumnDef="notes">
                  <th mat-header-cell *matHeaderCellDef>Notas</th>
                  <td mat-cell *matCellDef="let row">
                    <input class="notes-input" [(ngModel)]="row.notes" placeholder="Observaciones...">
                  </td>
                </ng-container>
                <ng-container matColumnDef="actions">
                  <th mat-header-cell *matHeaderCellDef></th>
                  <td mat-cell *matCellDef="let row; let i = index">
                    <button mat-icon-button (click)="moveUp(i)" [disabled]="i === 0" matTooltip="Subir">
                      <mat-icon>arrow_upward</mat-icon>
                    </button>
                    <button mat-icon-button (click)="moveDown(i)"
                            [disabled]="i === materialsData.length - 1" matTooltip="Bajar">
                      <mat-icon>arrow_downward</mat-icon>
                    </button>
                    <button mat-icon-button color="warn" (click)="removeMaterial(i)" matTooltip="Quitar">
                      <mat-icon>remove_circle</mat-icon>
                    </button>
                  </td>
                </ng-container>
                <tr mat-header-row *matHeaderRowDef="matColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: matColumns;"></tr>
                <tr class="mat-row" *matNoDataRow>
                  <td class="mat-cell" [attr.colspan]="matColumns.length">
                    <div class="empty-state" style="padding:32px">
                      <mat-icon>inventory_2</mat-icon>
                      <p>Agrega materiales usando el buscador de arriba</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            @if (materialsData.length > 0) {
              <div class="materials-summary">
                <mat-icon>summarize</mat-icon>
                <span>Total: <strong>{{ materialsData.length }}</strong> materiales</span>
              </div>
            }
          </mat-card-content>
        </mat-card>
      </div>

      <div class="save-bar">
        <button mat-button (click)="back()">Cancelar</button>
        <button mat-raised-button color="primary" (click)="save()" [disabled]="infoForm.invalid || saving()">
          <mat-icon>save</mat-icon>
          {{ saving() ? 'Guardando...' : (isNew ? 'Crear Plantilla' : 'Guardar Cambios') }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .designer-layout { display:grid; grid-template-columns:360px 1fr; gap:24px; align-items:start; }
    @media (max-width:900px) { .designer-layout { grid-template-columns:1fr; } }
    .info-form { display:flex; flex-direction:column; gap:4px; }
    .full-width { width:100%; }
    .upload-section { display:flex; flex-direction:column; gap:8px; }
    .upload-label { display:flex; align-items:center; gap:8px; font-weight:500; font-size:0.9rem; color:rgba(0,0,0,0.7); }
    .add-material-row { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
    .qty-input { width:80px; padding:4px 8px; border:1px solid rgba(0,0,0,0.2); border-radius:4px; font-size:0.9rem; }
    .notes-input { width:100%; padding:4px 8px; border:1px solid rgba(0,0,0,0.2); border-radius:4px; font-size:0.9rem; }
    .unit-label { margin-left:6px; color:rgba(0,0,0,0.5); font-size:0.8rem; }
    .materials-summary { display:flex; align-items:center; gap:8px; margin-top:16px; padding:12px; background:#e8f5e9; border-radius:8px; color:#2E7D32; }
    .save-bar { display:flex; justify-content:flex-end; gap:12px; margin-top:24px; padding-top:16px; border-top:1px solid rgba(0,0,0,0.08); }
  `]
})
export class TemplateDesignerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);

  template = signal<TemplateDto | null>(null);
  products = signal<ProductDto[]>([]);
  allMaterials = signal<MaterialDto[]>([]);
  loading = signal(false);
  saving = signal(false);

  materialsData: TemplateMaterialDto[] = [];
  materialsSource = new MatTableDataSource<TemplateMaterialDto>([]);
  matColumns = ['order', 'code', 'name', 'quantity', 'notes', 'actions'];

  materialSearch = new FormControl<string | MaterialDto>('');
  selectedMaterial: MaterialDto | null = null;
  addQty = 1;

  private searchValue = toSignal(
    this.materialSearch.valueChanges.pipe(startWith('')),
    { initialValue: '' }
  );

  filteredMaterials = computed(() => {
    const raw = this.searchValue();
    const search = typeof raw === 'string' ? raw.toLowerCase() : '';
    return this.allMaterials()
      .filter(m => m.name.toLowerCase().includes(search) || m.code.toLowerCase().includes(search))
      .slice(0, 20);
  });

  get isNew(): boolean {
    return this.route.snapshot.paramMap.get('id') === 'new';
  }

  infoForm = this.fb.group({
    code:        [''],
    name:        ['', Validators.required],
    description: [''],
    productId:   [null as number | null]
  });

  ngOnInit(): void {
    this.api.getAllMaterials().subscribe(mats => this.allMaterials.set(mats));
    this.api.getProducts(undefined, undefined, 0, 200).subscribe(p => this.products.set(p.content));

    if (!this.isNew) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.loading.set(true);
      this.api.getTemplate(id).subscribe({
        next: t => {
          this.template.set(t);
          this.infoForm.patchValue({ code: t.code, name: t.name, description: t.description, productId: t.productId });
          this.materialsData = [...(t.materials ?? [])];
          this.materialsSource.data = this.materialsData;
          this.loading.set(false);
        },
        error: () => { this.notify.error('No se pudo cargar la plantilla'); this.loading.set(false); }
      });
    }
  }

  displayMaterial = (m: MaterialDto | string | null): string => {
    if (!m) return '';
    if (typeof m === 'string') return m;
    return `${m.code} — ${m.name}`;
  };

  onMaterialSelected(event: any): void {
    this.selectedMaterial = event.option.value as MaterialDto;
  }

  addMaterial(): void {
    if (!this.selectedMaterial) return;
    if (this.materialsData.some(m => m.materialId === this.selectedMaterial!.id)) {
      this.notify.info('Este material ya está en la lista');
      return;
    }
    const item: TemplateMaterialDto = {
      materialId:   this.selectedMaterial.id,
      materialCode: this.selectedMaterial.code,
      materialName: this.selectedMaterial.name,
      materialUnit: this.selectedMaterial.unitOfMeasure,
      quantity:     this.addQty,
      unit:         this.selectedMaterial.unitOfMeasure,
      orderIndex:   this.materialsData.length
    };
    this.materialsData = [...this.materialsData, item];
    this.materialsSource.data = this.materialsData;
    this.selectedMaterial = null;
    this.materialSearch.setValue('');
    this.addQty = 1;
  }

  removeMaterial(index: number): void {
    this.materialsData = this.materialsData.filter((_, i) => i !== index);
    this.materialsSource.data = this.materialsData;
  }

  moveUp(index: number): void {
    if (index === 0) return;
    const arr = [...this.materialsData];
    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
    this.materialsData = arr;
    this.materialsSource.data = arr;
  }

  moveDown(index: number): void {
    if (index === this.materialsData.length - 1) return;
    const arr = [...this.materialsData];
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    this.materialsData = arr;
    this.materialsSource.data = arr;
  }

  save(): void {
    if (this.infoForm.invalid) return;
    this.saving.set(true);
    const req: CreateTemplateRequest = {
      code:        this.infoForm.value.code || undefined,
      name:        this.infoForm.value.name!,
      description: this.infoForm.value.description || undefined,
      productId:   this.infoForm.value.productId || null,
      materials:   this.materialsData.map((m, i) => ({ ...m, orderIndex: i }))
    };
    const obs = this.isNew
      ? this.api.createTemplate(req)
      : this.api.updateTemplate(this.template()!.id, req);

    obs.subscribe({
      next: result => {
        this.notify.success(this.isNew ? 'Plantilla creada exitosamente' : 'Plantilla guardada');
        if (this.isNew) { this.router.navigate(['/templates', result.id]); }
        else { this.template.set(result); }
        this.saving.set(false);
      },
      error: err => { this.notify.error(err.message); this.saving.set(false); }
    });
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file || !this.template()) return;
    this.api.uploadTemplateImage(this.template()!.id, file).subscribe({
      next: res => { this.template.set({ ...this.template()!, imageUrl: res.url }); this.notify.success('Imagen actualizada'); },
      error: err => this.notify.error(err.message)
    });
  }

  onProgramSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file || !this.template()) return;
    this.api.uploadTemplateProgram(this.template()!.id, file).subscribe({
      next: res => { this.template.set({ ...this.template()!, programFileUrl: res.url, programFileName: res.name }); this.notify.success('Programa actualizado'); },
      error: err => this.notify.error(err.message)
    });
  }

  back(): void { this.router.navigate(['/templates']); }
}
