import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="welcome-banner">
        <h2>Bienvenido, {{ auth.currentUser()?.fullName }}</h2>
        <p>{{ auth.currentUser()?.companyName }} — Sistema de Control de Inventario y Procesos</p>
      </div>

      <div class="stats-grid">
        @for (stat of stats; track stat.label) {
          <mat-card class="stat-card" [routerLink]="stat.route">
            <mat-card-content>
              <div class="stat-icon" [style.background]="stat.color">
                <mat-icon>{{ stat.icon }}</mat-icon>
              </div>
              <div class="stat-info">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>

      @if (lowStockItems().length > 0) {
        <mat-card class="alert-card">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#f44336">warning</mat-icon>
            <mat-card-title>Stock Bajo</mat-card-title>
            <mat-card-subtitle>{{ lowStockItems().length }} materiales por debajo del mínimo</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            @for (item of lowStockItems().slice(0, 5); track item.materialId) {
              <div class="low-stock-row">
                <span><strong>{{ item.materialName }}</strong> — {{ item.branchName }}</span>
                <span class="low-stock">{{ item.quantity }} {{ item.materialUnit }}</span>
              </div>
            }
          </mat-card-content>
          <mat-card-actions>
            <a mat-button color="warn" routerLink="/inventory">Ver todo el inventario</a>
          </mat-card-actions>
        </mat-card>
      }

      <div class="quick-actions">
        <h3>Accesos rápidos</h3>
        <div class="action-grid">
          @for (action of quickActions; track action.label) {
            <a mat-raised-button [routerLink]="action.route" [style.background]="action.color" style="color:white">
              <mat-icon>{{ action.icon }}</mat-icon>
              {{ action.label }}
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .welcome-banner { margin-bottom: 24px; }
    .welcome-banner h2 { margin: 0 0 4px; font-size: 1.5rem; font-weight: 600; }
    .welcome-banner p { margin: 0; color: rgba(0,0,0,0.6); }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-card { cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
    .stat-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
    mat-card-content { display: flex; align-items: center; gap: 16px; padding: 20px !important; }
    .stat-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
    .stat-icon mat-icon { color: white; }
    .stat-value { font-size: 1.75rem; font-weight: 700; line-height: 1; }
    .stat-label { color: rgba(0,0,0,0.6); font-size: 0.85rem; margin-top: 4px; }
    .alert-card { margin-bottom: 24px; border-left: 4px solid #f44336; }
    .low-stock-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(0,0,0,0.06); font-size: 0.9rem; }
    .quick-actions h3 { margin: 0 0 12px; font-weight: 500; }
    .action-grid { display: flex; gap: 12px; flex-wrap: wrap; }
  `]
})
export class DashboardComponent implements OnInit {
  auth = inject(AuthService);
  private api = inject(ApiService);

  lowStockItems = signal<any[]>([]);

  stats = [
    { label: 'Materiales',  value: '—', icon: 'inventory_2', color: '#1976D2', route: '/materials' },
    { label: 'Productos',   value: '—', icon: 'door_front',  color: '#2E7D32', route: '/products' },
    { label: 'Plantillas',  value: '—', icon: 'description', color: '#7B1FA2', route: '/templates' },
    { label: 'Stock Bajo',  value: '0', icon: 'warning',     color: '#E64A19', route: '/inventory' },
  ];

  quickActions = [
    { label: 'Nuevo Material',  icon: 'add', route: '/materials',  color: '#1976D2' },
    { label: 'Nueva Plantilla', icon: 'add', route: '/templates',  color: '#7B1FA2' },
    { label: 'Ver Inventario',  icon: 'warehouse', route: '/inventory', color: '#2E7D32' },
  ];

  ngOnInit(): void {
    this.api.getMaterials(undefined, undefined, 0, 1).subscribe({
      next: r => { this.stats[0].value = r.totalElements.toString(); },
      error: () => { this.stats[0].value = '0'; }
    });
    this.api.getProducts(undefined, undefined, 0, 1).subscribe({
      next: r => { this.stats[1].value = r.totalElements.toString(); },
      error: () => { this.stats[1].value = '0'; }
    });
    this.api.getTemplates(undefined, undefined, 0, 1).subscribe({
      next: r => { this.stats[2].value = r.totalElements.toString(); },
      error: () => { this.stats[2].value = '0'; }
    });
    this.api.getLowStock().subscribe({
      next: items => { this.lowStockItems.set(items); this.stats[3].value = items.length.toString(); },
      error: () => { this.stats[3].value = '0'; }
    });
  }
}
