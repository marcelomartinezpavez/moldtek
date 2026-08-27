import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';
import { CompanyDto, BranchDto } from '../../core/models/company.model';

@Component({
  selector: 'app-branch-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ data.branch ? 'edit' : 'add_business' }}</mat-icon>
      {{ data.branch ? 'Editar Sucursal' : 'Nueva Sucursal' }}
    </h2>
    <mat-dialog-content>
      <form [formGroup]="form" style="display:flex;flex-direction:column;gap:0;min-width:480px">
        <mat-form-field appearance="outline">
          <mat-label>Nombre *</mat-label>
          <input matInput formControlName="name" placeholder="Ej: Sucursal Concepción">
          <mat-error>Requerido</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Dirección</mat-label>
          <input matInput formControlName="address">
        </mat-form-field>
        <div style="display:flex;gap:12px">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Teléfono</mat-label>
            <input matInput formControlName="phone">
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline">
          <mat-label>Descripción</mat-label>
          <textarea matInput formControlName="description" rows="2"></textarea>
        </mat-form-field>
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
export class BranchFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);
  private notify = inject(NotificationService);
  private dialogRef = inject(MatDialogRef<BranchFormComponent>);
  data: { branch?: BranchDto } = inject(MAT_DIALOG_DATA);

  saving = false;
  form = this.fb.group({
    name:        ['', Validators.required],
    address:     [''],
    phone:       [''],
    email:       [''],
    description: ['']
  });

  ngOnInit(): void {
    if (this.data.branch) this.form.patchValue(this.data.branch as any);
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const obs = this.data.branch
      ? this.api.updateBranch(this.data.branch.id, this.form.value)
      : this.api.createBranch(this.form.value);
    obs.subscribe({
      next: () => { this.notify.success(this.data.branch ? 'Sucursal actualizada' : 'Sucursal creada'); this.dialogRef.close(true); },
      error: err => { this.notify.error(err.message); this.saving = false; }
    });
  }
}

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule, MatTableModule, MatDividerModule, MatProgressBarModule, MatTooltipModule, MatDialogModule
  ],
  template: `
    <div class="page-container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start">

        <!-- Company info card -->
        <mat-card class="content-card">
          <mat-card-header>
            <mat-icon mat-card-avatar style="color:#2E7D32">business</mat-icon>
            <mat-card-title>Información de la Empresa</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            @if (loading()) { <mat-progress-bar mode="indeterminate" /> }
            <form [formGroup]="companyForm" style="display:flex;flex-direction:column;gap:4px;margin-top:8px">
              <div style="display:flex;gap:12px">
                <mat-form-field appearance="outline" style="flex:2">
                  <mat-label>Nombre *</mat-label>
                  <input matInput formControlName="name">
                </mat-form-field>
                <mat-form-field appearance="outline" style="flex:1">
                  <mat-label>RUT</mat-label>
                  <input matInput formControlName="rut" [readonly]="true">
                </mat-form-field>
              </div>
              <mat-form-field appearance="outline">
                <mat-label>Dirección</mat-label>
                <input matInput formControlName="address">
              </mat-form-field>
              <div style="display:flex;gap:12px">
                <mat-form-field appearance="outline" style="flex:1">
                  <mat-label>Teléfono</mat-label>
                  <input matInput formControlName="phone">
                </mat-form-field>
                <mat-form-field appearance="outline" style="flex:1">
                  <mat-label>Email</mat-label>
                  <input matInput type="email" formControlName="email">
                </mat-form-field>
              </div>
              <mat-form-field appearance="outline">
                <mat-label>Sitio web</mat-label>
                <input matInput formControlName="website">
              </mat-form-field>
            </form>
          </mat-card-content>
          <mat-card-actions align="end">
            <button mat-raised-button color="primary" (click)="saveCompany()" [disabled]="companyForm.invalid || savingCompany()">
              <mat-icon>save</mat-icon> {{ savingCompany() ? 'Guardando...' : 'Guardar cambios' }}
            </button>
          </mat-card-actions>
        </mat-card>

        <!-- Branches card -->
        <mat-card class="content-card">
          <div class="card-header" style="padding:16px 16px 8px">
            <mat-card-title><mat-icon style="vertical-align:middle;margin-right:8px">store</mat-icon>Sucursales</mat-card-title>
            <button mat-raised-button color="primary" (click)="openBranchForm()">
              <mat-icon>add</mat-icon> Nueva
            </button>
          </div>
          <mat-card-content>
            <div class="table-wrapper">
              <table mat-table [dataSource]="branchSource">
                <ng-container matColumnDef="name">
                  <th mat-header-cell *matHeaderCellDef>Nombre</th>
                  <td mat-cell *matCellDef="let row">
                    <strong>{{ row.name }}</strong><br>
                    <small class="text-muted">{{ row.address }}</small>
                  </td>
                </ng-container>
                <ng-container matColumnDef="contact">
                  <th mat-header-cell *matHeaderCellDef>Contacto</th>
                  <td mat-cell *matCellDef="let row">
                    <small>{{ row.phone }}</small><br>
                    <small class="text-muted">{{ row.email }}</small>
                  </td>
                </ng-container>
                <ng-container matColumnDef="actions">
                  <th mat-header-cell *matHeaderCellDef></th>
                  <td mat-cell *matCellDef="let row">
                    <button mat-icon-button color="primary" (click)="openBranchForm(row)" matTooltip="Editar">
                      <mat-icon>edit</mat-icon>
                    </button>
                    <button mat-icon-button color="warn" (click)="deleteBranch(row)" matTooltip="Eliminar">
                      <mat-icon>delete</mat-icon>
                    </button>
                  </td>
                </ng-container>
                <tr mat-header-row *matHeaderRowDef="branchColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: branchColumns;"></tr>
                <tr class="mat-row" *matNoDataRow>
                  <td class="mat-cell" [attr.colspan]="3">
                    <div class="empty-state" style="padding:24px">
                      <mat-icon>store</mat-icon><p>No hay sucursales</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`@media (max-width:900px) { div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns:1fr !important; } }`]
})
export class CompanyComponent implements OnInit {
  private api = inject(ApiService);
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);
  private notify = inject(NotificationService);

  loading = signal(false);
  savingCompany = signal(false);
  branchColumns = ['name', 'contact', 'actions'];
  branchSource = new MatTableDataSource<BranchDto>([]);

  companyForm = this.fb.group({
    name:    ['', Validators.required],
    rut:     [{ value: '', disabled: true }],
    address: [''],
    phone:   [''],
    email:   ['', Validators.email],
    website: ['']
  });

  ngOnInit(): void {
    this.loading.set(true);
    this.api.getCompany().subscribe({
      next: c => { this.companyForm.patchValue(c as any); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
    this.loadBranches();
  }

  loadBranches(): void {
    this.api.getBranches().subscribe(branches => this.branchSource.data = branches);
  }

  saveCompany(): void {
    if (this.companyForm.invalid) return;
    this.savingCompany.set(true);
    this.api.updateCompany(this.companyForm.value as any).subscribe({
      next: () => { this.notify.success('Empresa actualizada'); this.savingCompany.set(false); },
      error: err => { this.notify.error(err.message); this.savingCompany.set(false); }
    });
  }

  openBranchForm(branch?: BranchDto): void {
    const ref = this.dialog.open(BranchFormComponent, { width: '520px', data: { branch } });
    ref.afterClosed().subscribe(result => { if (result) this.loadBranches(); });
  }

  deleteBranch(branch: BranchDto): void {
    if (!confirm(`¿Eliminar sucursal "${branch.name}"?`)) return;
    this.api.deleteBranch(branch.id).subscribe({
      next: () => { this.notify.success('Sucursal eliminada'); this.loadBranches(); },
      error: err => this.notify.error(err.message)
    });
  }
}
