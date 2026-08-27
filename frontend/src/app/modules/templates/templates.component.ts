import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { TemplateDto } from '../../core/models/template.model';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [
    MatTableModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatPaginatorModule, MatTooltipModule, MatProgressBarModule,
    MatChipsModule, MatDialogModule, FormsModule, RouterLink
  ],
  template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">description</mat-icon>Plantillas de Fabricación</h2>
          <div class="header-actions">
            <mat-form-field appearance="outline" style="width:240px" subscriptSizing="dynamic">
              <mat-label>Buscar plantilla</mat-label>
              <input matInput [(ngModel)]="searchText" (ngModelChange)="load()" placeholder="Código o nombre...">
              <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="newTemplate()">
              <mat-icon>add</mat-icon> Nueva Plantilla
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        <div class="templates-grid">
          @if (templates().length === 0 && !loading()) {
            <div class="empty-state">
              <mat-icon>description</mat-icon>
              <p>No hay plantillas creadas</p>
              <small>Las plantillas definen los materiales necesarios para fabricar un modelo de puerta o moldura</small>
              <button mat-raised-button color="primary" style="margin-top:16px" (click)="newTemplate()">
                <mat-icon>add</mat-icon> Crear primera plantilla
              </button>
            </div>
          }

          @for (t of templates(); track t.id) {
            <mat-card class="template-card">
              @if (t.imageUrl) {
                <img mat-card-image [src]="t.imageUrl" alt="{{ t.name }}" style="height:140px;object-fit:cover">
              } @else {
                <div class="placeholder-img">
                  <mat-icon>door_front</mat-icon>
                </div>
              }
              <mat-card-content>
                <div class="template-code">{{ t.code }}</div>
                <div class="template-name">{{ t.name }}</div>
                @if (t.productName) {
                  <mat-chip-set><mat-chip style="font-size:0.7rem">{{ t.productName }}</mat-chip></mat-chip-set>
                }
                <div class="template-meta">
                  <mat-icon style="font-size:14px;color:rgba(0,0,0,0.5)">build</mat-icon>
                  <span class="text-muted" style="font-size:0.8rem">{{ t.materials?.length ?? 0 }} materiales</span>
                </div>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary" [routerLink]="['/templates', t.id]">
                  <mat-icon>open_in_new</mat-icon> Abrir
                </button>
                <button mat-icon-button color="warn" (click)="delete(t)" matTooltip="Eliminar">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-card-actions>
            </mat-card>
          }
        </div>

        <mat-paginator [length]="totalElements" [pageSize]="12" [pageSizeOptions]="[12,24,48]"
                       (page)="onPageChange($event)" showFirstLastButtons />
      </mat-card>
    </div>
  `,
  styles: [`
    .templates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; padding: 16px; }
    .template-card { cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
    .template-card:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
    .placeholder-img { height: 140px; background: linear-gradient(135deg,#e8f5e9,#c8e6c9); display: flex; align-items: center; justify-content: center; }
    .placeholder-img mat-icon { font-size: 64px; color: #2E7D32; opacity: 0.4; width: 64px; height: 64px; }
    .template-code { font-size: 0.75rem; font-weight: 600; color: #2E7D32; letter-spacing: 0.5px; text-transform: uppercase; }
    .template-name { font-size: 1rem; font-weight: 500; margin: 4px 0 8px; }
    .template-meta { display: flex; align-items: center; gap: 4px; margin-top: 8px; }
  `]
})
export class TemplatesComponent implements OnInit {
  private api = inject(ApiService);
  private router = inject(Router);
  private notify = inject(NotificationService);

  templates = signal<TemplateDto[]>([]);
  loading = signal(false);
  totalElements = 0;
  searchText = '';
  private currentPage = 0;

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading.set(true);
    this.api.getTemplates(this.searchText, undefined, this.currentPage, 12).subscribe({
      next: page => {
        this.templates.set(page.content);
        this.totalElements = page.totalElements;
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.load();
  }

  newTemplate(): void {
    this.router.navigate(['/templates', 'new']);
  }

  delete(t: TemplateDto): void {
    if (!confirm(`¿Eliminar plantilla "${t.name}"?`)) return;
    this.api.deleteTemplate(t.id).subscribe({
      next: () => { this.notify.success('Plantilla eliminada'); this.load(); },
      error: err => this.notify.error(err.message)
    });
  }
}
