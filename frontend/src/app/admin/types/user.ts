export type UserRole = 'super_admin' | 'admin' | 'counselor' | 'editor' | 'viewer';

export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
  phone?: string;
  permissions: string[];
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  phone?: string;
  password?: string;
}
