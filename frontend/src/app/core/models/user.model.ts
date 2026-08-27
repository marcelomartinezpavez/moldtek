export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  tokenType: string;
  userId: number;
  username: string;
  email: string;
  fullName: string;
  companyId: number;
  companyName: string;
  branchId: number | null;
  branchName: string | null;
  roles: string[];
}

export interface UserDto {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  active: boolean;
  companyId: number;
  companyName: string;
  branchId: number | null;
  branchName: string | null;
  roles: string[];
  createdAt: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  branchId?: number | null;
  roles: string[];
}

export interface UpdateUserRequest {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  branchId?: number | null;
  active?: boolean;
  roles?: string[];
}
