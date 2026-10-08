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
      header: 'Attendee Profile',
      cell: (reg) => (
        <div>
          <span className="font-bold text-sm text-slate-900">{reg.fullName}</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3 text-slate-400" /> {reg.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3 text-slate-400" /> {reg.phone}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: 'Target Country',
      cell: (reg) => (
        <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
          {reg.preferredCountry || 'Undecided'}
        </span>
      ),
    },
    {
      header: 'Current City',
      cell: (reg) => (
        <span className="text-xs font-medium text-slate-600">{reg.city || 'Tamil Nadu'}</span>
      ),
    },
    {
      header: 'Attendance Status',
      cell: (reg) => (
        <Badge
          variant={
            reg.status === 'confirmed'
              ? 'success'
              : reg.status === 'attended'
              ? 'default'
              : 'secondary'
          }
          dot
        >
          <span className="capitalize">{reg.status}</span>
        </Badge>
      ),
    },
    {
      header: 'Registration Time',
      cell: (reg) => (
        <span className="text-xs font-mono text-slate-500">
          {formatDate(reg.registeredAt)}
        </span>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={registrations}
      isLoading={isLoading}
      emptyTitle="No attendee registrations yet"
      emptyDescription="Registrations from website visitors will appear here in real time."
    />
  );
}
