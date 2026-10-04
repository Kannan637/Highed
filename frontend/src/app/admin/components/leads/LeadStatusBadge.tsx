import React from 'react';
import { Badge } from '../ui/badge';
import { LeadStatus } from '../../types/lead';

interface LeadStatusBadgeProps {
  status: LeadStatus;
}

const statusConfig: Record<LeadStatus, { label: string; variant: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' }> = {
  new: { label: 'New', variant: 'default' },
  contacted: { label: 'Contacted', variant: 'secondary' },
  in_progress: { label: 'In Progress', variant: 'warning' },
  counseling_scheduled: { label: 'Counseling', variant: 'warning' },
  applied: { label: 'Applied', variant: 'secondary' },
  offer_received: { label: 'Offer Received', variant: 'success' },
  visa_approved: { label: 'Visa Approved', variant: 'success' },
  enrolled: { label: 'Enrolled', variant: 'success' },
  lost: { label: 'Lost', variant: 'destructive' },
  junk: { label: 'Junk', variant: 'destructive' },
};

export function LeadStatusBadge({ status }: LeadStatusBadgeProps) {
  const config = statusConfig[status] || { label: status, variant: 'secondary' };
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
