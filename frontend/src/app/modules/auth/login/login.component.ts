import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-header>
          <div class="brand">
            <div class="brand-icon">
              <mat-icon>door_front</mat-icon>
            </div>
            <div>
              <h1>MOLDTEK</h1>
              <p>Sistema de Control de Inventario</p>
            </div>
          </div>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="form" (ngSubmit)="onLogin()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Usuario</mat-label>
              <input matInput formControlName="username" autocomplete="username">
              <mat-icon matPrefix>person</mat-icon>
              @if (form.get('username')?.hasError('required') && form.get('username')?.touched) {
                <mat-error>El usuario es requerido</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Contraseña</mat-label>
              <input matInput [type]="hidePassword() ? 'password' : 'text'"
                     formControlName="password" autocomplete="current-password">
              <mat-icon matPrefix>lock</mat-icon>
              <button mat-icon-button matSuffix type="button" (click)="hidePassword.set(!hidePassword())">
                <mat-icon>{{ hidePassword() ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              @if (form.get('password')?.hasError('required') && form.get('password')?.touched) {
                <mat-error>La contraseña es requerida</mat-error>
              }
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit"
                    class="full-width login-btn"
                    [disabled]="loading() || form.invalid">
              @if (loading()) {
                <mat-spinner diameter="20" style="display:inline-block" />
              } @else {
                Ingresar
              }
            </button>
          </form>
        </mat-card-content>

        <mat-card-footer>
          <p class="footer-hint">Usuario por defecto: <strong>admin</strong> / <strong>admin123</strong></p>
        </mat-card-footer>
      </mat-card>
    </div>
  `,
  styles: [`
    .login-container {
      min-height: 100vh; display: flex; align-items: center;
      justify-content: center; background: linear-gradient(135deg, #1B5E20, #2E7D32, #388E3C);
      padding: 24px;
    }
    .login-card { width: 100%; max-width: 420px; border-radius: 16px; overflow: hidden; }
    .brand { display: flex; align-items: center; gap: 16px; padding: 16px 0; }
    .brand-icon {
      width: 56px; height: 56px; background: #2E7D32; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      mat-icon { color: white; font-size: 32px; width: 32px; height: 32px; }
    }
    .brand h1 { margin: 0; font-size: 1.5rem; color: #2E7D32; font-weight: 700; }
    .brand p { margin: 4px 0 0; color: rgba(0,0,0,0.6); font-size: 0.85rem; }
    .full-width { width: 100%; }
    .login-btn { height: 48px; font-size: 1rem; margin-top: 8px; }
    .footer-hint { text-align: center; color: rgba(0,0,0,0.5); font-size: 0.8rem; margin: 12px 0 8px; }
    mat-card-content { padding: 24px 24px 8px; }
  `]
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private notify = inject(NotificationService);

  loading = signal(false);
  hidePassword = signal(true);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onLogin(): void {
    if (this.form.invalid) return;
    this.loading.set(true);
    const { username, password } = this.form.value;
    this.auth.login({ username: username!, password: password! }).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: err => {
        this.notify.error(err.message || 'Credenciales incorrectas');
        this.loading.set(false);
      }
    });
  }
}
