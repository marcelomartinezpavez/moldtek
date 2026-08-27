export interface TemplateMaterialDto {
  id?: number;
  materialId: number;
  materialCode?: string;
  materialName?: string;
  materialUnit?: string;
  quantity: number;
  unit?: string;
  notes?: string;
  orderIndex?: number;
}

export interface TemplateDto {
  id: number;
  code: string;
  name: string;
  description: string;
  productId: number | null;
  productName: string | null;
  productCode: string | null;
  imageUrl: string | null;
  programFileUrl: string | null;
  programFileName: string | null;
  active: boolean;
  createdByName: string;
  createdAt: string;
  updatedAt: string;
  materials?: TemplateMaterialDto[];
}

export interface CreateTemplateRequest {
  code?: string;
  name: string;
  description?: string;
  productId?: number | null;
  materials?: TemplateMaterialDto[];
}

export interface ProductDto {
  id: number;
  code: string;
  name: string;
  description: string;
  categoryId: number | null;
  categoryName: string | null;
  subcategory: string;
  modelName: string;
  heightMin: number;
  heightMax: number;
  widthMin: number;
  widthMax: number;
  thicknessStandard: number;
  thicknessSpecial: number;
  fillType: string;
  finishType: string;
  veneerOptions: string;
  norm: string;
  warranty: string;
  certification: string;
  price: number;
  imageUrl: string;
  active: boolean;
  createdAt: string;
}

export interface ProductCategoryDto {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  active: boolean;
}
