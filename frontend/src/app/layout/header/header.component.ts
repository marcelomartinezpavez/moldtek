import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule],
  template: `
    <mat-toolbar color="primary" style="background:#2E7D32">
      <button mat-icon-button (click)="toggleNav.emit()">
        <mat-icon>menu</mat-icon>
      </button>
      <span style="margin-left:8px;font-weight:600">Moldtek ERP</span>
      <span style="flex:1"></span>
      <span style="font-size:0.9rem;opacity:0.9;margin-right:8px">{{ user()?.fullName }}</span>
      <button mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #userMenu>
        <button mat-menu-item disabled>
          <mat-icon>business</mat-icon>
          <span>{{ user()?.companyName }}</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item (click)="auth.logout()">
          <mat-icon>logout</mat-icon>
          <span>Cerrar sesión</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `
})
export class HeaderComponent {
  @Output() toggleNav = new EventEmitter<void>();
  auth = inject(AuthService);
  user = this.auth.currentUser;
}
