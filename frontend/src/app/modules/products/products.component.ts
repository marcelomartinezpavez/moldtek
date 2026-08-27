import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { ProductDto, ProductCategoryDto } from '../../core/models/template.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatSelectModule, MatChipsModule, MatTooltipModule,
    MatProgressBarModule, MatDialogModule, FormsModule, DecimalPipe
  ],
  template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">door_front</mat-icon>Catálogo de Productos</h2>
          <div class="header-actions">
            <mat-form-field appearance="outline" style="width:200px" subscriptSizing="dynamic">
              <mat-label>Categoría</mat-label>
              <mat-select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()">
                <mat-option [value]="null">Todas</mat-option>
                @for (cat of categories(); track cat.id) {
                  <mat-option [value]="cat.id">{{ cat.name }}</mat-option>
                }
              </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" style="width:220px" subscriptSizing="dynamic">
              <mat-label>Buscar</mat-label>
              <input matInput [(ngModel)]="searchText" (ngModelChange)="onFilterChange()" placeholder="Código o nombre...">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="openForm()">
              <mat-icon>add</mat-icon> Nuevo Producto
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        <div class="table-wrapper">
          <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="code">
              <th mat-header-cell *matHeaderCellDef>Código</th>
              <td mat-cell *matCellDef="let row"><strong>{{ row.code }}</strong></td>
            </ng-container>
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Nombre</th>
              <td mat-cell *matCellDef="let row">{{ row.name }}</td>
            </ng-container>
            <ng-container matColumnDef="categoryName">
              <th mat-header-cell *matHeaderCellDef>Categoría</th>
              <td mat-cell *matCellDef="let row">
                @if (row.categoryName) {
                  <mat-chip-set><mat-chip>{{ row.categoryName }}</mat-chip></mat-chip-set>
                } @else { <span class="text-muted">—</span> }
              </td>
            </ng-container>
            <ng-container matColumnDef="dimensions">
              <th mat-header-cell *matHeaderCellDef>Dimensiones (mm)</th>
              <td mat-cell *matCellDef="let row">
                @if (row.heightMin) {
                  <span class="text-muted" style="font-size:0.8rem">
                    {{ row.heightMin }}–{{ row.heightMax }} × {{ row.widthMin }}–{{ row.widthMax }}
                  </span>
                } @else { <span class="text-muted">—</span> }
              </td>
            </ng-container>
            <ng-container matColumnDef="finishType">
              <th mat-header-cell *matHeaderCellDef>Terminación</th>
              <td mat-cell *matCellDef="let row">{{ row.finishType || '—' }}</td>
            </ng-container>
            <ng-container matColumnDef="price">
              <th mat-header-cell *matHeaderCellDef>Precio ($)</th>
              <td mat-cell *matCellDef="let row" style="text-align:right">
                @if (row.price) { {{ row.price | number:'1.0-0' }} }
                @else { <span class="text-muted">—</span> }
              </td>
            </ng-container>
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openForm(row)" matTooltip="Editar">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deleteProduct(row)" matTooltip="Eliminar">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;"></tr>
            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell" [attr.colspan]="columns.length">
                <div class="empty-state">
                  <mat-icon>door_front</mat-icon>
                  <p>No se encontraron productos</p>
                  <button mat-raised-button color="primary" (click)="openForm()">Agregar primer producto</button>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <mat-paginator [length]="totalElements" [pageSize]="20" [pageSizeOptions]="[10,20,50]"
                       (page)="onPageChange($event)" showFirstLastButtons />
      </mat-card>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  private api = inject(ApiService);
  private dialog = inject(MatDialog);
  private notify = inject(NotificationService);

  columns = ['code', 'name', 'categoryName', 'dimensions', 'finishType', 'price', 'actions'];
  dataSource = new MatTableDataSource<ProductDto>([]);
  categories = signal<ProductCategoryDto[]>([]);
  loading = signal(false);
  totalElements = 0;
  searchText = '';
  selectedCategory: number | null = null;
  private currentPage = 0;

  ngOnInit(): void {
    this.api.getProductCategories().subscribe(cats => this.categories.set(cats));
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading.set(true);
    this.api.getProducts(this.searchText, this.selectedCategory ?? undefined, this.currentPage, 20).subscribe({
      next: page => { this.dataSource.data = page.content; this.totalElements = page.totalElements; this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  onFilterChange(): void { this.currentPage = 0; this.loadProducts(); }
  onPageChange(event: any): void { this.currentPage = event.pageIndex; this.loadProducts(); }

  openForm(product?: ProductDto): void {
    import('./product-form/product-form.component').then(m => {
      const ref = this.dialog.open(m.ProductFormComponent, {
        width: '720px',
        data: { product, categories: this.categories() }
      });
      ref.afterClosed().subscribe(result => { if (result) this.loadProducts(); });
    });
  }

  deleteProduct(p: ProductDto): void {
    if (!confirm(`¿Eliminar producto "${p.name}"?`)) return;
    this.api.deleteProduct(p.id).subscribe({
      next: () => { this.notify.success('Producto eliminado'); this.loadProducts(); },
      error: err => this.notify.error(err.message)
    });
  }
}
