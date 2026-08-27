import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MaterialCategoryDto, MaterialDto, CreateMaterialRequest, PageResponse } from '../models/material.model';
import { CreateTemplateRequest, ProductCategoryDto, ProductDto, TemplateDto } from '../models/template.model';
import { BranchDto, CompanyDto } from '../models/company.model';
import { CreateUserRequest, UpdateUserRequest, UserDto } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // -- Materials --
  getMaterials(search?: string, categoryId?: number, page = 0, size = 20): Observable<PageResponse<MaterialDto>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (search) params = params.set('search', search);
    if (categoryId) params = params.set('categoryId', categoryId);
    return this.http.get<{ data: PageResponse<MaterialDto> }>(`${this.base}/materials`, { params })
      .pipe(map(r => r.data));
  }

  getAllMaterials(): Observable<MaterialDto[]> {
    return this.http.get<{ data: MaterialDto[] }>(`${this.base}/materials/all`).pipe(map(r => r.data));
  }

  getMaterial(id: number): Observable<MaterialDto> {
    return this.http.get<{ data: MaterialDto }>(`${this.base}/materials/${id}`).pipe(map(r => r.data));
  }

  createMaterial(req: CreateMaterialRequest): Observable<MaterialDto> {
    return this.http.post<{ data: MaterialDto }>(`${this.base}/materials`, req).pipe(map(r => r.data));
  }

  updateMaterial(id: number, req: CreateMaterialRequest): Observable<MaterialDto> {
    return this.http.put<{ data: MaterialDto }>(`${this.base}/materials/${id}`, req).pipe(map(r => r.data));
  }

  deleteMaterial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/materials/${id}`);
  }

  // -- Material Categories --
  getMaterialCategories(): Observable<MaterialCategoryDto[]> {
    return this.http.get<{ data: MaterialCategoryDto[] }>(`${this.base}/materials/categories`).pipe(map(r => r.data));
  }

  createMaterialCategory(name: string, description?: string, parentId?: number | null): Observable<MaterialCategoryDto> {
    return this.http.post<{ data: MaterialCategoryDto }>(`${this.base}/materials/categories`, { name, description, parentId })
      .pipe(map(r => r.data));
  }

  deleteMaterialCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/materials/categories/${id}`);
  }

  // -- Products --
  getProducts(search?: string, categoryId?: number, page = 0, size = 20): Observable<PageResponse<ProductDto>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (search) params = params.set('search', search);
    if (categoryId) params = params.set('categoryId', categoryId);
    return this.http.get<{ data: PageResponse<ProductDto> }>(`${this.base}/products`, { params })
      .pipe(map(r => r.data));
  }

  getProduct(id: number): Observable<ProductDto> {
    return this.http.get<{ data: ProductDto }>(`${this.base}/products/${id}`).pipe(map(r => r.data));
  }

  createProduct(req: any): Observable<ProductDto> {
    return this.http.post<{ data: ProductDto }>(`${this.base}/products`, req).pipe(map(r => r.data));
  }

  updateProduct(id: number, req: any): Observable<ProductDto> {
    return this.http.put<{ data: ProductDto }>(`${this.base}/products/${id}`, req).pipe(map(r => r.data));
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/products/${id}`);
  }

  getProductCategories(): Observable<ProductCategoryDto[]> {
    return this.http.get<{ data: ProductCategoryDto[] }>(`${this.base}/products/categories`).pipe(map(r => r.data));
  }

  // -- Templates --
  getTemplates(search?: string, productId?: number, page = 0, size = 20): Observable<PageResponse<TemplateDto>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (search) params = params.set('search', search);
    if (productId) params = params.set('productId', productId);
    return this.http.get<{ data: PageResponse<TemplateDto> }>(`${this.base}/templates`, { params })
      .pipe(map(r => r.data));
  }

  getTemplate(id: number): Observable<TemplateDto> {
    return this.http.get<{ data: TemplateDto }>(`${this.base}/templates/${id}`).pipe(map(r => r.data));
  }

  createTemplate(req: CreateTemplateRequest): Observable<TemplateDto> {
    return this.http.post<{ data: TemplateDto }>(`${this.base}/templates`, req).pipe(map(r => r.data));
  }

  updateTemplate(id: number, req: CreateTemplateRequest): Observable<TemplateDto> {
    return this.http.put<{ data: TemplateDto }>(`${this.base}/templates/${id}`, req).pipe(map(r => r.data));
  }

  deleteTemplate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/templates/${id}`);
  }

  uploadTemplateImage(templateId: number, file: File): Observable<{ url: string }> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<{ data: { url: string } }>(`${this.base}/files/template/${templateId}/image`, fd)
      .pipe(map(r => r.data));
  }

  uploadTemplateProgram(templateId: number, file: File): Observable<{ url: string; name: string }> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<{ data: { url: string; name: string } }>(`${this.base}/files/template/${templateId}/program`, fd)
      .pipe(map(r => r.data));
  }

  // -- Company --
  getCompany(): Observable<CompanyDto> {
    return this.http.get<{ data: CompanyDto }>(`${this.base}/company`).pipe(map(r => r.data));
  }

  updateCompany(req: Partial<CompanyDto>): Observable<CompanyDto> {
    return this.http.put<{ data: CompanyDto }>(`${this.base}/company`, req).pipe(map(r => r.data));
  }

  // -- Branches --
  getBranches(): Observable<BranchDto[]> {
    return this.http.get<{ data: BranchDto[] }>(`${this.base}/branches`).pipe(map(r => r.data));
  }

  getBranch(id: number): Observable<BranchDto> {
    return this.http.get<{ data: BranchDto }>(`${this.base}/branches/${id}`).pipe(map(r => r.data));
  }

  createBranch(req: Partial<BranchDto>): Observable<BranchDto> {
    return this.http.post<{ data: BranchDto }>(`${this.base}/branches`, req).pipe(map(r => r.data));
  }

  updateBranch(id: number, req: Partial<BranchDto>): Observable<BranchDto> {
    return this.http.put<{ data: BranchDto }>(`${this.base}/branches/${id}`, req).pipe(map(r => r.data));
  }

  deleteBranch(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/branches/${id}`);
  }

  // -- Users --
  getUsers(): Observable<UserDto[]> {
    return this.http.get<{ data: UserDto[] }>(`${this.base}/users`).pipe(map(r => r.data));
  }

  createUser(req: CreateUserRequest): Observable<UserDto> {
    return this.http.post<{ data: UserDto }>(`${this.base}/users`, req).pipe(map(r => r.data));
  }

  updateUser(id: number, req: UpdateUserRequest): Observable<UserDto> {
    return this.http.put<{ data: UserDto }>(`${this.base}/users/${id}`, req).pipe(map(r => r.data));
  }

  deactivateUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/users/${id}`);
  }

  // -- Inventory --
  getInventory(branchId: number, search?: string): Observable<any[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    return this.http.get<{ data: any[] }>(`${this.base}/inventory/branch/${branchId}`, { params })
      .pipe(map(r => r.data));
  }

  getLowStock(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(`${this.base}/inventory/low-stock`).pipe(map(r => r.data));
  }

  updateStock(branchId: number, materialId: number, quantity: number, minimumStock?: number): Observable<any> {
    return this.http.put<{ data: any }>(`${this.base}/inventory/branch/${branchId}/material/${materialId}`,
      { quantity, minimumStock }).pipe(map(r => r.data));
  }

  requestTransfer(req: any): Observable<any> {
    return this.http.post<{ data: any }>(`${this.base}/inventory/transfers`, req).pipe(map(r => r.data));
  }

  approveTransfer(id: number): Observable<any> {
    return this.http.post<{ data: any }>(`${this.base}/inventory/transfers/${id}/approve`, {}).pipe(map(r => r.data));
  }
}
