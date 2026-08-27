export interface MaterialCategoryDto {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  parentName: string | null;
  active: boolean;
}

export interface MaterialDto {
  id: number;
  code: string;
  name: string;
  description: string;
  categoryId: number | null;
  categoryName: string | null;
  unitOfMeasure: string;
  unitPrice: number;
  supplier: string;
  notes: string;
  imageUrl: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMaterialRequest {
  code: string;
  name: string;
  description?: string;
  categoryId?: number | null;
  unitOfMeasure: string;
  unitPrice: number;
  supplier?: string;
  notes?: string;
}

export const UNITS_OF_MEASURE = [
  { value: 'UNI', label: 'Unidad (UNI)' },
  { value: 'M2', label: 'Metro cuadrado (M²)' },
  { value: 'ML', label: 'Metro lineal (ML)' },
  { value: 'M3', label: 'Metro cúbico (M³)' },
  { value: 'KG', label: 'Kilogramo (KG)' },
  { value: 'L', label: 'Litro (L)' },
  { value: 'PLACA', label: 'Placa' },
  { value: 'PAR', label: 'Par' },
  { value: 'JUEGO', label: 'Juego' },
  { value: 'M', label: 'Metro (M)' },
];

export interface PageResponse<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}
