import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  roles?: string[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  template: `
    <div class="sidebar-brand">
      <img src="assets/images/logo.png" alt="Moldtek" onerror="this.style.display='none'" style="height:40px">
      <span>MOLDTEK</span>
    </div>

    <mat-nav-list>
      @for (item of visibleItems; track item.route) {
        <a mat-list-item
           [routerLink]="item.route"
           routerLinkActive="active-link"
           (click)="closeNav.emit()">
          <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
          <span matListItemTitle>{{ item.label }}</span>
        </a>
      }
    </mat-nav-list>

    <div class="sidebar-footer">
      <small style="opacity:0.6">v1.0.0 · {{ auth.currentUser()?.companyName }}</small>
    </div>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; height: 100%; }
    .sidebar-brand {
      display: flex; align-items: center; gap: 12px;
      padding: 20px 16px; border-bottom: 1px solid rgba(255,255,255,0.15);
      color: white; font-weight: 700; font-size: 1.1rem;
    }
    mat-nav-list { flex: 1; padding-top: 8px; }
    a[mat-list-item] { color: rgba(255,255,255,0.85); border-radius: 0 24px 24px 0; margin-right: 16px; }
    a[mat-list-item]:hover { background: rgba(255,255,255,0.1); }
    .active-link { background: rgba(255,255,255,0.2) !important; color: white !important; font-weight: 500; }
    .sidebar-footer { padding: 16px; color: white; text-align: center; }
    mat-icon { color: rgba(255,255,255,0.75); }
  `]
})
export class SidebarComponent {
  @Output() closeNav = new EventEmitter<void>();
  auth = inject(AuthService);

  readonly navItems: NavItem[] = [
    { label: 'Dashboard',     icon: 'dashboard',       route: '/dashboard' },
    { label: 'Materiales',    icon: 'inventory_2',     route: '/materials' },
    { label: 'Catálogo',      icon: 'door_front',      route: '/products' },
    { label: 'Plantillas',    icon: 'description',     route: '/templates' },
    { label: 'Inventario',    icon: 'warehouse',       route: '/inventory' },
    { label: 'Empresa',       icon: 'business',        route: '/company',   roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] },
    { label: 'Usuarios',      icon: 'group',           route: '/users',     roles: ['ROLE_ADMIN'] },
  ];

  get visibleItems(): NavItem[] {
    const roles = this.auth.currentUser()?.roles ?? [];
    return this.navItems.filter(item =>
      !item.roles || item.roles.some(r => roles.includes(r))
    );
  }
}
