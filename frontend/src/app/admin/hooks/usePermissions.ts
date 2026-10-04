'use client';

import { useAuth } from './useAuth';
import { hasPermission, hasAnyPermission, hasAllPermissions } from '../lib/auth/permissions';

export function usePermissions() {
  const { user } = useAuth();

  return {
    can: (permission: string) => hasPermission(user, permission),
    canAny: (permissions: string[]) => hasAnyPermission(user, permissions),
    canAll: (permissions: string[]) => hasAllPermissions(user, permissions),
    isSuperAdmin: user?.role === 'super_admin',
    isAdmin: user?.role === 'admin' || user?.role === 'super_admin',
  };
}
