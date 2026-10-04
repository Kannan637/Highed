import React from 'react';
import { Badge } from '../ui/badge';
import { BlogStatus } from '../../types/blog';

interface BlogStatusBadgeProps {
  status: BlogStatus;
}

export function BlogStatusBadge({ status }: BlogStatusBadgeProps) {
  const variant =
    status === 'published' ? 'success' : status === 'draft' ? 'warning' : 'secondary';

  return <Badge variant={variant}>{status.toUpperCase()}</Badge>;
}
