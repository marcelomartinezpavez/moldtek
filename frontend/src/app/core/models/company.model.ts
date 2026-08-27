export interface CompanyDto {
  id: number;
  name: string;
  rut: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  logoUrl: string;
  active: boolean;
  branchCount: number;
  createdAt: string;
}

export interface BranchDto {
  id: number;
  companyId: number;
  companyName: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  active: boolean;
  createdAt: string;
}
