import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-C3SHWEMB.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EHKUBBLL.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  // -- Materials --
  getMaterials(search, categoryId, page = 0, size = 20) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (search)
      params = params.set("search", search);
    if (categoryId)
      params = params.set("categoryId", categoryId);
    return this.http.get(`${this.base}/materials`, { params }).pipe(map((r) => r.data));
  }
  getAllMaterials() {
    return this.http.get(`${this.base}/materials/all`).pipe(map((r) => r.data));
  }
  getMaterial(id) {
    return this.http.get(`${this.base}/materials/${id}`).pipe(map((r) => r.data));
  }
  createMaterial(req) {
    return this.http.post(`${this.base}/materials`, req).pipe(map((r) => r.data));
  }
  updateMaterial(id, req) {
    return this.http.put(`${this.base}/materials/${id}`, req).pipe(map((r) => r.data));
  }
  deleteMaterial(id) {
    return this.http.delete(`${this.base}/materials/${id}`);
  }
  // -- Material Categories --
  getMaterialCategories() {
    return this.http.get(`${this.base}/materials/categories`).pipe(map((r) => r.data));
  }
  createMaterialCategory(name, description, parentId) {
    return this.http.post(`${this.base}/materials/categories`, { name, description, parentId }).pipe(map((r) => r.data));
  }
  deleteMaterialCategory(id) {
    return this.http.delete(`${this.base}/materials/categories/${id}`);
  }
  // -- Products --
  getProducts(search, categoryId, page = 0, size = 20) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (search)
      params = params.set("search", search);
    if (categoryId)
      params = params.set("categoryId", categoryId);
    return this.http.get(`${this.base}/products`, { params }).pipe(map((r) => r.data));
  }
  getProduct(id) {
    return this.http.get(`${this.base}/products/${id}`).pipe(map((r) => r.data));
  }
  createProduct(req) {
    return this.http.post(`${this.base}/products`, req).pipe(map((r) => r.data));
  }
  updateProduct(id, req) {
    return this.http.put(`${this.base}/products/${id}`, req).pipe(map((r) => r.data));
  }
  deleteProduct(id) {
    return this.http.delete(`${this.base}/products/${id}`);
  }
  getProductCategories() {
    return this.http.get(`${this.base}/products/categories`).pipe(map((r) => r.data));
  }
  // -- Templates --
  getTemplates(search, productId, page = 0, size = 20) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (search)
      params = params.set("search", search);
    if (productId)
      params = params.set("productId", productId);
    return this.http.get(`${this.base}/templates`, { params }).pipe(map((r) => r.data));
  }
  getTemplate(id) {
    return this.http.get(`${this.base}/templates/${id}`).pipe(map((r) => r.data));
  }
  createTemplate(req) {
    return this.http.post(`${this.base}/templates`, req).pipe(map((r) => r.data));
  }
  updateTemplate(id, req) {
    return this.http.put(`${this.base}/templates/${id}`, req).pipe(map((r) => r.data));
  }
  deleteTemplate(id) {
    return this.http.delete(`${this.base}/templates/${id}`);
  }
  uploadTemplateImage(templateId, file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.base}/files/template/${templateId}/image`, fd).pipe(map((r) => r.data));
  }
  uploadTemplateProgram(templateId, file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.base}/files/template/${templateId}/program`, fd).pipe(map((r) => r.data));
  }
  // -- Company --
  getCompany() {
    return this.http.get(`${this.base}/company`).pipe(map((r) => r.data));
  }
  updateCompany(req) {
    return this.http.put(`${this.base}/company`, req).pipe(map((r) => r.data));
  }
  // -- Branches --
  getBranches() {
    return this.http.get(`${this.base}/branches`).pipe(map((r) => r.data));
  }
  getBranch(id) {
    return this.http.get(`${this.base}/branches/${id}`).pipe(map((r) => r.data));
  }
  createBranch(req) {
    return this.http.post(`${this.base}/branches`, req).pipe(map((r) => r.data));
  }
  updateBranch(id, req) {
    return this.http.put(`${this.base}/branches/${id}`, req).pipe(map((r) => r.data));
  }
  deleteBranch(id) {
    return this.http.delete(`${this.base}/branches/${id}`);
  }
  // -- Users --
  getUsers() {
    return this.http.get(`${this.base}/users`).pipe(map((r) => r.data));
  }
  createUser(req) {
    return this.http.post(`${this.base}/users`, req).pipe(map((r) => r.data));
  }
  updateUser(id, req) {
    return this.http.put(`${this.base}/users/${id}`, req).pipe(map((r) => r.data));
  }
  deactivateUser(id) {
    return this.http.delete(`${this.base}/users/${id}`);
  }
  // -- Inventory --
  getInventory(branchId, search) {
    let params = new HttpParams();
    if (search)
      params = params.set("search", search);
    return this.http.get(`${this.base}/inventory/branch/${branchId}`, { params }).pipe(map((r) => r.data));
  }
  getLowStock() {
    return this.http.get(`${this.base}/inventory/low-stock`).pipe(map((r) => r.data));
  }
  updateStock(branchId, materialId, quantity, minimumStock) {
    return this.http.put(`${this.base}/inventory/branch/${branchId}/material/${materialId}`, { quantity, minimumStock }).pipe(map((r) => r.data));
  }
  requestTransfer(req) {
    return this.http.post(`${this.base}/inventory/transfers`, req).pipe(map((r) => r.data));
  }
  approveTransfer(id) {
    return this.http.post(`${this.base}/inventory/transfers/${id}/approve`, {}).pipe(map((r) => r.data));
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ApiService
};
//# debugId=68845456-acc9-5cab-8ca4-06267faa484d
//# sourceMappingURL=chunk-LVWMVW7I.js.map
