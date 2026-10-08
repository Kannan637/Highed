import React from 'react';
import { Badge, type BadgeProps } from '../ui/badge';

interface StatusBadgeProps {
  status: string;
  variant?: 'default' | 'accent' | 'secondary' | 'destructive' | 'success' | 'warning' | 'outline';
  label?: string;
  dot?: boolean;
  className?: string;
}

export function StatusBadge({
  status,
  variant = 'secondary',
  label,
  dot = true,
  className,
}: StatusBadgeProps) {
  const displayLabel = label || status.replace(/_/g, ' ');

  return (
    <Badge variant={variant} dot={dot} className={className}>
      <span className="capitalize">{displayLabel}</span>
    </Badge>
  );
}
