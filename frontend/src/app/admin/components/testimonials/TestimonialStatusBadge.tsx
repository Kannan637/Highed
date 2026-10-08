import React from 'react';
import { Badge } from '../ui/badge';
import { TestimonialStatus } from '../../types/testimonial';

interface TestimonialStatusBadgeProps {
  status: TestimonialStatus;
}

export function TestimonialStatusBadge({ status }: TestimonialStatusBadgeProps) {
  const variant =
    status === 'published' ? 'success' : status === 'draft' ? 'warning' : 'secondary';

  return (
    <Badge variant={variant} dot>
      <span className="capitalize">{status}</span>
    </Badge>
  );
}
