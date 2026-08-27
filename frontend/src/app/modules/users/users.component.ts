import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { AuthService } from '../../core/services/auth.service';
import { UserDto, CreateUserRequest, UpdateUserRequest } from '../../core/models/user.model';
import { BranchDto } from '../../core/models/company.model';

const ROLES = [
  { value: 'ROLE_ADMIN',     label: 'Administrador' },
  { value: 'ROLE_MANAGER',   label: 'Gerente' },
  { value: 'ROLE_WAREHOUSE', label: 'Bodega' },
  { value: 'ROLE_SALES',     label: 'Ventas' },
  { value: 'ROLE_VIEWER',    label: 'Solo lectura' },
];

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatIconModule, MatDividerModule
  ],
  template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ data.user ? 'edit' : 'person_add' }}</mat-icon>
      {{ data.user ? 'Editar Usuario' : 'Nuevo Usuario' }}
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form" style="display:flex;flex-direction:column;gap:0;min-width:500px">
        @if (!data.user) {
          <div style="display:flex;gap:12px">
            <mat-form-field appearance="outline" style="flex:1">
              <mat-label>Nombre de usuario *</mat-label>
              <input matInput formControlName="username">
              <mat-error>Requerido</mat-error>
            </mat-form-field>
            <mat-form-field appearance="outline" style="flex:1">
              <mat-label>Contraseña *</mat-label>
              <input matInput type="password" formControlName="password">
              <mat-error>Mínimo 6 caracteres</mat-error>
            </mat-form-field>
          </div>
        }
        <div style="display:flex;gap:12px">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Nombre *</mat-label>
            <input matInput formControlName="firstName">
            <mat-error>Requerido</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Apellido *</mat-label>
            <input matInput formControlName="lastName">
            <mat-error>Requerido</mat-error>
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline">
          <mat-label>Email *</mat-label>
          <input matInput type="email" formControlName="email">
          <mat-error>Email inválido</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Teléfono</mat-label>
          <input matInput formControlName="phone">
        </mat-form-field>
        <div style="display:flex;gap:12px">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Sucursal</mat-label>
            <mat-select formControlName="branchId">
              <mat-option [value]="null">Todas las sucursales</mat-option>
              @for (b of data.branches; track b.id) {
                <mat-option [value]="b.id">{{ b.name }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Roles *</mat-label>
            <mat-select formControlName="roles" multiple>
              @for (r of roles; track r.value) {
                <mat-option [value]="r.value">{{ r.label }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>
        @if (data.user) {
          <mat-form-field appearance="outline">
            <mat-label>Estado</mat-label>
            <mat-select formControlName="active">
              <mat-option [value]="true">Activo</mat-option>
              <mat-option [value]="false">Inactivo</mat-option>
            </mat-select>
          </mat-form-field>
        }
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid || saving">
        <mat-icon>save</mat-icon> {{ saving ? 'Guardando...' : 'Guardar' }}
      </button>
    </mat-dialog-actions>
  `
})
export class UserFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private dialogRef = inject(MatDialogRef<UserFormComponent>);
  data: { user?: UserDto; branches: BranchDto[] } = inject(MAT_DIALOG_DATA);

  roles = ROLES;
  saving = false;

  form = this.fb.group({
    username:  ['', this.data.user ? [] : [Validators.required]],
    password:  ['', this.data.user ? [] : [Validators.required, Validators.minLength(6)]],
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    email:     ['', [Validators.required, Validators.email]],
    phone:     [''],
    branchId:  [null as number | null],
    roles:     [[] as string[], Validators.required],
    active:    [true]
  });

  ngOnInit(): void {
    if (this.data.user) {
      const u = this.data.user;
      this.form.patchValue({ firstName: u.firstName, lastName: u.lastName, email: u.email, phone: u.phone, branchId: u.branchId, roles: u.roles, active: u.active });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const v = this.form.value;

    if (this.data.user) {
      const req: UpdateUserRequest = { email: v.email!, firstName: v.firstName!, lastName: v.lastName!, phone: v.phone || undefined, branchId: v.branchId, roles: v.roles!, active: v.active! };
      this.api.updateUser(this.data.user.id, req).subscribe({
        next: () => { this.notify.success('Usuario actualizado'); this.dialogRef.close(true); },
        error: err => { this.notify.error(err.message); this.saving = false; }
      });
    } else {
      const req: CreateUserRequest = { username: v.username!, email: v.email!, password: v.password!, firstName: v.firstName!, lastName: v.lastName!, phone: v.phone || undefined, branchId: v.branchId, roles: v.roles! };
      this.api.createUser(req).subscribe({
        next: () => { this.notify.success('Usuario creado'); this.dialogRef.close(true); },
        error: err => { this.notify.error(err.message); this.saving = false; }
      });
    }
  }
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatChipsModule, MatTooltipModule, MatProgressBarModule,
    MatDialogModule, FormsModule
  ],
  template: `
    <div class="page-container">
      <mat-card class="content-card">
        <div class="card-header">
          <h2><mat-icon style="vertical-align:middle;margin-right:8px">people</mat-icon>Gestión de Usuarios</h2>
          <div class="header-actions">
            <button mat-raised-button color="primary" (click)="openForm()">
              <mat-icon>person_add</mat-icon> Nuevo Usuario
            </button>
          </div>
        </div>

        @if (loading()) { <mat-progress-bar mode="indeterminate" /> }

        <div class="table-wrapper">
          <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Nombre</th>
              <td mat-cell *matCellDef="let row">
                <strong>{{ row.fullName }}</strong><br>
                <small class="text-muted">@{{ row.username }}</small>
              </td>
            </ng-container>
            <ng-container matColumnDef="email">
              <th mat-header-cell *matHeaderCellDef>Email</th>
              <td mat-cell *matCellDef="let row">{{ row.email }}</td>
            </ng-container>
            <ng-container matColumnDef="branch">
              <th mat-header-cell *matHeaderCellDef>Sucursal</th>
              <td mat-cell *matCellDef="let row">{{ row.branchName || 'Todas' }}</td>
            </ng-container>
            <ng-container matColumnDef="roles">
              <th mat-header-cell *matHeaderCellDef>Roles</th>
              <td mat-cell *matCellDef="let row">
                <mat-chip-set>
                  @for (r of row.roles; track r) {
                    <mat-chip [style.background]="roleColor(r)" style="color:white;font-size:0.7rem">
                      {{ roleLabel(r) }}
                    </mat-chip>
                  }
                </mat-chip-set>
              </td>
            </ng-container>
            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Estado</th>
              <td mat-cell *matCellDef="let row">
                <span [style.color]="row.active ? '#2E7D32' : '#f44336'">
                  <mat-icon style="vertical-align:middle;font-size:16px">{{ row.active ? 'check_circle' : 'cancel' }}</mat-icon>
                  {{ row.active ? 'Activo' : 'Inactivo' }}
                </span>
              </td>
            </ng-container>
            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Acciones</th>
              <td mat-cell *matCellDef="let row">
                <button mat-icon-button color="primary" (click)="openForm(row)" matTooltip="Editar">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deactivate(row)" [disabled]="row.username === currentUsername"
                        matTooltip="Desactivar">
                  <mat-icon>person_off</mat-icon>
                </button>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="columns"></tr>
            <tr mat-row *matRowDef="let row; columns: columns;" [style.opacity]="row.active ? 1 : 0.5"></tr>
            <tr class="mat-row" *matNoDataRow>
              <td class="mat-cell" [attr.colspan]="columns.length">
                <div class="empty-state"><mat-icon>people</mat-icon><p>No hay usuarios</p></div>
              </td>
            </tr>
          </table>
        </div>
      </mat-card>
    </div>
  `
})
export class UsersComponent implements OnInit {
  private api = inject(ApiService);
  private dialog = inject(MatDialog);
  private notify = inject(NotificationService);
  private auth = inject(AuthService);

  columns = ['name', 'email', 'branch', 'roles', 'status', 'actions'];
  dataSource = new MatTableDataSource<UserDto>([]);
  loading = signal(false);
  branches: BranchDto[] = [];
  get currentUsername(): string | undefined { return this.auth.currentUser()?.username; }

  ngOnInit(): void {
    this.api.getBranches().subscribe(b => this.branches = b);
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading.set(true);
    this.api.getUsers().subscribe({
      next: users => { this.dataSource.data = users; this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  openForm(user?: UserDto): void {
    const ref = this.dialog.open(UserFormComponent, { width: '560px', data: { user, branches: this.branches } });
    ref.afterClosed().subscribe(result => { if (result) this.loadUsers(); });
  }

  deactivate(user: UserDto): void {
    if (!confirm(`¿Desactivar usuario "${user.fullName}"?`)) return;
    this.api.deactivateUser(user.id).subscribe({
      next: () => { this.notify.success('Usuario desactivado'); this.loadUsers(); },
      error: err => this.notify.error(err.message)
    });
  }

  roleLabel(role: string): string {
    return ROLES.find(r => r.value === role)?.label ?? role;
  }

  roleColor(role: string): string {
    const map: Record<string, string> = {
      ROLE_ADMIN: '#7B1FA2', ROLE_MANAGER: '#1565C0',
      ROLE_WAREHOUSE: '#2E7D32', ROLE_SALES: '#E65100', ROLE_VIEWER: '#546E7A'
    };
    return map[role] ?? '#757575';
  }
}
