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
import { ProductDto, ProductCategoryDto } from '../../../core/models/template.model';

const FILL_TYPES = ['HONEY_COMB', 'POLIESTIRENO', 'SOLIDO', 'NA'];
const FINISH_TYPES = ['ENCHAPADO', 'PREPINTADO', 'MELAMÍNICO', 'NA'];

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatIconModule, MatDividerModule
  ],
  template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ isEdit ? 'edit' : 'add' }}</mat-icon>
      {{ isEdit ? 'Editar Producto' : 'Nuevo Producto' }}
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="product-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Código *</mat-label>
            <input matInput formControlName="code" [readonly]="isEdit" placeholder="Ej: PI-HDF-001">
            <mat-error>Requerido</mat-error>
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
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Nombre *</mat-label>
          <input matInput formControlName="name" placeholder="Ej: Puerta Interior HDF Enchapada">
          <mat-error>Requerido</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Descripción</mat-label>
          <textarea matInput formControlName="description" rows="2"></textarea>
        </mat-form-field>
        <mat-divider style="margin:8px 0"></mat-divider>
        <p style="font-weight:500;color:rgba(0,0,0,0.7);margin-bottom:4px">Dimensiones (mm)</p>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Alto mín</mat-label>
            <input matInput type="number" formControlName="heightMin">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Alto máx</mat-label>
            <input matInput type="number" formControlName="heightMax">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Ancho mín</mat-label>
            <input matInput type="number" formControlName="widthMin">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Ancho máx</mat-label>
            <input matInput type="number" formControlName="widthMax">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Espesor estándar</mat-label>
            <input matInput type="number" formControlName="thicknessStandard">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Relleno</mat-label>
            <mat-select formControlName="fillType">
              @for (f of fillTypes; track f) { <mat-option [value]="f">{{ f }}</mat-option> }
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Terminación</mat-label>
            <mat-select formControlName="finishType">
              @for (f of finishTypes; track f) { <mat-option [value]="f">{{ f }}</mat-option> }
            </mat-select>
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Precio ($)</mat-label>
            <input matInput type="number" formControlName="price" min="0">
            <span matPrefix>$&nbsp;</span>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Norma</mat-label>
            <input matInput formControlName="norm" placeholder="Ej: NCh 440">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Garantía</mat-label>
            <input matInput formControlName="warranty" placeholder="Ej: 1 año">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Certificación</mat-label>
            <input matInput formControlName="certification" placeholder="Ej: F30">
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Guardar' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`.product-form { display:flex; flex-direction:column; gap:0; min-width:640px; }
    .form-row { display:flex; gap:12px; } .form-row mat-form-field { flex:1; }
    mat-dialog-content { max-height:75vh; }`]
})
export class ProductFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private dialogRef = inject(MatDialogRef<ProductFormComponent>);
  data: { product?: ProductDto; categories: ProductCategoryDto[] } = inject(MAT_DIALOG_DATA);

  fillTypes = FILL_TYPES;
  finishTypes = FINISH_TYPES;
  saving = false;
  get isEdit() { return !!this.data.product; }

  form = this.fb.group({
    code:              ['', Validators.required],
    name:              ['', Validators.required],
    description:       [''],
    categoryId:        [null as number | null],
    heightMin:         [null as number | null],
    heightMax:         [null as number | null],
    widthMin:          [null as number | null],
    widthMax:          [null as number | null],
    thicknessStandard: [null as number | null],
    fillType:          ['NA'],
    finishType:        ['NA'],
    price:             [null as number | null],
    norm:              [''],
    warranty:          [''],
    certification:     ['']
  });

  ngOnInit(): void {
    if (this.data.product) this.form.patchValue(this.data.product as any);
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const req = this.form.value;
    const obs = this.isEdit ? this.api.updateProduct(this.data.product!.id, req) : this.api.createProduct(req);
    obs.subscribe({
      next: () => { this.notify.success(this.isEdit ? 'Producto actualizado' : 'Producto creado'); this.dialogRef.close(true); },
      error: err => { this.notify.error(err.message); this.saving = false; }
    });
  }
}
