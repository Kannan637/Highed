import { User } from '../../types/user';
import { ROLE_DEFINITIONS } from './roles';

export function hasPermission(user: User | null, permission: string): boolean {
  if (!user) return false;
  if (user.role === 'super_admin') return true;

  if (user.permissions && user.permissions.includes(permission)) {
    return true;
  }

  const roleDef = ROLE_DEFINITIONS[user.role];
  return roleDef ? roleDef.permissions.includes(permission) : false;
}

export function hasAnyPermission(user: User | null, permissions: string[]): boolean {
  return permissions.some((perm) => hasPermission(user, perm));
}

export function hasAllPermissions(user: User | null, permissions: string[]): boolean {
  return permissions.every((perm) => hasPermission(user, perm));
}
