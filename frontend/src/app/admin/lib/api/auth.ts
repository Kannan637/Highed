import { apiClient } from './client';
import { ApiResponse } from '../../types/api';
import { AuthResponse, LoginCredentials } from '../../types/auth';
import { User } from '../../types/user';

export async function apiLogin(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
  return apiClient<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

export async function apiLogout(): Promise<ApiResponse<{ success: boolean }>> {
  return apiClient<{ success: boolean }>('/auth/logout', {
    method: 'POST',
  });
}

export async function apiGetCurrentUser(): Promise<ApiResponse<User>> {
  return apiClient<User>('/auth/me');
}
