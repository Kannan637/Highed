'use client';

import React from 'react';
import { EventRegistration } from '../../types/registration';
import { DataTable, Column } from '../common/DataTable';
import { formatDate } from '../../lib/utils';
import { Badge } from '../ui/badge';
import { Mail, Phone } from 'lucide-react';

interface RegistrationTableProps {
  registrations: EventRegistration[];
  isLoading: boolean;
}

export function RegistrationTable({ registrations, isLoading }: RegistrationTableProps) {
  const columns: Column<EventRegistration>[] = [
    {
      header: 'Attendee',
      cell: (reg) => (
        <div>
          <span className="font-medium text-slate-900">{reg.fullName}</span>
          <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" /> {reg.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> {reg.phone}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: 'Preferred Country',
      cell: (reg) => (
        <span className="text-sm text-slate-700">
          {reg.preferredCountry || 'Undecided'}
        </span>
      ),
    },
    {
      header: 'City',
      cell: (reg) => (
        <span className="text-sm text-slate-700">{reg.city || '-'}</span>
      ),
    },
    {
      header: 'Status',
      cell: (reg) => (
        <Badge
          variant={
            reg.status === 'confirmed'
              ? 'success'
              : reg.status === 'attended'
              ? 'default'
              : 'secondary'
          }
        >
          {reg.status}
        </Badge>
      ),
    },
    {
      header: 'Registered On',
      cell: (reg) => (
        <span className="text-xs text-slate-500">{formatDate(reg.registeredAt)}</span>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={registrations}
      isLoading={isLoading}
      emptyTitle="No registrations yet"
      emptyDescription="Students who register on the public website will show up here."
    />
  );
}
