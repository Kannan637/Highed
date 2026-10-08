import React from 'react';
import { Badge } from '../ui/badge';
import { UserStatus } from '../../types/user';

interface UserStatusBadgeProps {
  status: UserStatus;
}

export function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const variant =
    status === 'active' ? 'success' : status === 'inactive' ? 'secondary' : 'destructive';

  return (
    <Badge variant={variant} dot>
      <span className="capitalize">{status}</span>
    </Badge>
  );
}
