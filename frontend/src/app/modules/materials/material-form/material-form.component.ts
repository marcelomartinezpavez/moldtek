import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ApiService } from '../../../core/services/api.service';
import { NotificationService } from '../../../core/services/notification.service';
import { MaterialCategoryDto, MaterialDto, UNITS_OF_MEASURE } from '../../../core/models/material.model';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatIconModule, MatDividerModule
  ],
  template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ isEdit ? 'edit' : 'add' }}</mat-icon>
      {{ isEdit ? 'Editar Material' : 'Nuevo Material' }}
    </h2>

    <mat-dialog-content>
      <form [formGroup]="form" class="material-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Código *</mat-label>
            <input matInput formControlName="code" [readonly]="isEdit" placeholder="Ej: MDF-15-2440">
            <mat-error>El código es requerido</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Categoría</mat-label>
            <mat-select formControlName="categoryId">
              <mat-option [value]="null">Sin categoría</mat-option>
              @for (cat of data.categories; track cat.id) {
                <mat-option [value]="cat.id">{{ cat.name }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nombre *</mat-label>
          <input matInput formControlName="name" placeholder="Ej: Tablero MDF 15mm 2440x1220">
          <mat-error>El nombre es requerido</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Descripción</mat-label>
          <textarea matInput formControlName="description" rows="2" placeholder="Descripción detallada del material..."></textarea>
        </mat-form-field>

        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Unidad de Medida *</mat-label>
            <mat-select formControlName="unitOfMeasure">
              @for (unit of units; track unit.value) {
                <mat-option [value]="unit.value">{{ unit.label }}</mat-option>
              }
            </mat-select>
            <mat-error>Requerido</mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Precio Unitario ($) *</mat-label>
            <input matInput type="number" formControlName="unitPrice" min="0" step="0.01">
            <span matPrefix>$&nbsp;</span>
            <mat-error>Debe ser mayor o igual a 0</mat-error>
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Proveedor</mat-label>
          <input matInput formControlName="supplier" placeholder="Nombre del proveedor">
          <mat-icon matPrefix>local_shipping</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Notas</mat-label>
          <textarea matInput formControlName="notes" rows="2" placeholder="Observaciones adicionales..."></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Guardar' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .material-form { display: flex; flex-direction: column; gap: 0; min-width: 560px; }
    .full-width { width: 100%; }
    .form-row { display: flex; gap: 16px; }
    .form-row mat-form-field { flex: 1; }
    mat-dialog-content { max-height: 70vh; }
  `]
})
export class MaterialFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private dialogRef = inject(MatDialogRef<MaterialFormComponent>);
  data: { material?: MaterialDto; categories: MaterialCategoryDto[] } = inject(MAT_DIALOG_DATA);

  units = UNITS_OF_MEASURE;
  saving = false;
  get isEdit(): boolean { return !!this.data.material; }

  form = this.fb.group({
    code:          ['', Validators.required],
    name:          ['', Validators.required],
    description:   [''],
    categoryId:    [null as number | null],
    unitOfMeasure: ['UNI', Validators.required],
    unitPrice:     [0, [Validators.required, Validators.min(0)]],
    supplier:      [''],
    notes:         ['']
  });

  ngOnInit(): void {
    if (this.data.material) {
      const m = this.data.material;
      this.form.patchValue({
        code: m.code, name: m.name, description: m.description,
        categoryId: m.categoryId, unitOfMeasure: m.unitOfMeasure,
        unitPrice: m.unitPrice, supplier: m.supplier, notes: m.notes
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const req = this.form.value as any;

    const obs = this.isEdit
      ? this.api.updateMaterial(this.data.material!.id, req)
      : this.api.createMaterial(req);

    obs.subscribe({
      next: () => {
        this.notify.success(this.isEdit ? 'Material actualizado' : 'Material creado exitosamente');
        this.dialogRef.close(true);
      },
      error: err => {
        this.notify.error(err.message);
        this.saving = false;
      }
    });
  }
}
