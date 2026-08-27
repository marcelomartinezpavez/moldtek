import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./modules/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'materials',
        loadComponent: () => import('./modules/materials/materials.component').then(m => m.MaterialsComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./modules/products/products.component').then(m => m.ProductsComponent)
      },
      {
        path: 'templates',
        loadComponent: () => import('./modules/templates/templates.component').then(m => m.TemplatesComponent)
      },
      {
        path: 'templates/:id',
        loadComponent: () => import('./modules/templates/template-designer/template-designer.component')
          .then(m => m.TemplateDesignerComponent)
      },
      {
        path: 'inventory',
        loadComponent: () => import('./modules/inventory/inventory.component').then(m => m.InventoryComponent)
      },
      {
        path: 'company',
        loadComponent: () => import('./modules/company/company.component').then(m => m.CompanyComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('./modules/users/users.component').then(m => m.UsersComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
