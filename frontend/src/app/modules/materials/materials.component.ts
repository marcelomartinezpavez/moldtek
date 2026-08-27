import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { MaterialDto, MaterialCategoryDto } from '../../core/models/material.model';
import { MaterialFormComponent } from './material-form/material-form.component';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatButtonModule,
    MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDialogModule,
    MatChipsModule, MatTooltipModule, MatProgressBarModule, FormsModule, DecimalPipe
  ],
  template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">inventory_2</mat-icon>Catálogo de Materiales</h2>
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
              <mat-icon>add</mat-icon> Nuevo Material
            </button>
          </div>
        </div>

        @if (loading()) {
          <mat-progress-bar mode="indeterminate" />
        }

        <div class="table-wrapper">
          <table mat-table [dataSource]="dataSource" matSort>
            <ng-container matColumnDef="code">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Código</th>
              <td mat-cell *matCellDef="let row"><strong>{{ row.code }}</strong></td>
            </ng-container>

            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Nombre</th>
              <td mat-cell *matCellDef="let row">{{ row.name }}</td>
            </ng-container>

            <ng-container matColumnDef="categoryName">
              <th mat-header-cell *matHeaderCellDef>Categoría</th>
              <td mat-cell *matCellDef="let row">
                @if (row.categoryName) {
                  <mat-chip-set><mat-chip>{{ row.categoryName }}</mat-chip></mat-chip-set>
                } @else {
                  <span class="text-muted">—</span>
                }
              </td>
            </ng-container>

            <ng-container matColumnDef="unitOfMeasure">
              <th mat-header-cell *matHeaderCellDef>Unidad</th>
              <td mat-cell *matCellDef="let row">{{ row.unitOfMeasure }}</td>
            </ng-container>

            <ng-container matColumnDef="unitPrice">
              <th mat-header-cell *matHeaderCellDef mat-sort-header>Precio Unit. ($)</th>
              <td mat-cell *matCellDef="let row" class="text-right">
                {{ row.unitPrice | number:'1.0-0' }}
              </td>
            </ng-container>

            <ng-container matColumnDef="supplier">
              <th mat-header-cell *matHeaderCellDef>Proveedor</th>
              <td mat-cell *matCellDef="let row">{{ row.supplier || '—' }}</td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openForm(row)" matTooltip="Editar">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deleteMaterial(row)" matTooltip="Eliminar">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;"></tr>

            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell" [attr.colspan]="columns.length">
                <div class="empty-state">
                  <mat-icon>inventory_2</mat-icon>
                  <p>No se encontraron materiales</p>
                  <button mat-raised-button color="primary" (click)="openForm()">Agregar primer material</button>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <mat-paginator [length]="totalElements" [pageSize]="20" [pageSizeOptions]="[10,20,50]"
                       (page)="onPageChange($event)" showFirstLastButtons />
      </mat-card>
    </div>
  `,
  styles: [`.text-right { text-align: right; } mat-chip { font-size: 0.75rem; }`]
})
export class MaterialsComponent implements OnInit {
  private api = inject(ApiService);
  private dialog = inject(MatDialog);
  private notify = inject(NotificationService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns = ['code', 'name', 'categoryName', 'unitOfMeasure', 'unitPrice', 'supplier', 'actions'];
  dataSource = new MatTableDataSource<MaterialDto>([]);
  categories = signal<MaterialCategoryDto[]>([]);
  loading = signal(false);
  totalElements = 0;
  searchText = '';
  selectedCategory: number | null = null;
  private currentPage = 0;

  ngOnInit(): void {
    this.loadCategories();
    this.loadMaterials();
  }

  loadCategories(): void {
    this.api.getMaterialCategories().subscribe(cats => this.categories.set(cats));
  }

  loadMaterials(): void {
    this.loading.set(true);
    this.api.getMaterials(this.searchText, this.selectedCategory ?? undefined, this.currentPage, 20).subscribe({
      next: page => {
        this.dataSource.data = page.content;
        this.totalElements = page.totalElements;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onFilterChange(): void {
    this.currentPage = 0;
    this.loadMaterials();
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.loadMaterials();
  }

  openForm(material?: MaterialDto): void {
    const ref = this.dialog.open(MaterialFormComponent, {
      width: '640px',
      data: { material, categories: this.categories() }
    });
    ref.afterClosed().subscribe(result => {
      if (result) this.loadMaterials();
    });
  }

  deleteMaterial(material: MaterialDto): void {
    if (!confirm(`¿Eliminar material "${material.name}"?`)) return;
    this.api.deleteMaterial(material.id).subscribe({
      next: () => { this.notify.success('Material eliminado'); this.loadMaterials(); },
      error: err => this.notify.error(err.message)
    });
  }
}
