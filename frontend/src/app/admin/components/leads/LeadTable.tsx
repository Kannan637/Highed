'use client';

import React from 'react';
import Link from 'next/link';
import { Lead } from '../../types/lead';
import { DataTable, Column } from '../common/DataTable';
import { LeadStatusBadge } from './LeadStatusBadge';
import { formatDate } from '../../lib/utils';
import { Eye, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/button';

interface LeadTableProps {
  leads: Lead[];
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

export function LeadTable({
  leads,
  total,
  page,
  pageSize,
  onPageChange,
  isLoading,
}: LeadTableProps) {
  const columns: Column<Lead>[] = [
    {
      header: 'Student',
      cell: (lead) => (
        <div>
          <Link
            href={`/admin/leads/${lead.id}`}
            className="font-semibold text-sm text-slate-900 hover:text-indigo-600"
          >
            {lead.fullName}
          </Link>
          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-slate-400" /> {lead.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-slate-400" /> {lead.phone}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: 'Country / Course',
      cell: (lead) => (
        <div>
          <span className="font-medium text-sm text-slate-800">
            {lead.countryPreference?.join(', ') || 'Any'}
          </span>
          <p className="text-xs text-slate-500 mt-0.5">{lead.coursePreference || 'General Guidance'}</p>
        </div>
      ),
    },
    {
      header: 'Status',
      cell: (lead) => <LeadStatusBadge status={lead.status} />,
    },
    {
      header: 'Source',
      cell: (lead) => (
        <span className="text-sm capitalize text-slate-600">
          {lead.source?.replace('_', ' ')}
        </span>
      ),
    },
    {
      header: 'Created',
      cell: (lead) => (
        <span className="text-sm text-slate-500">{formatDate(lead.createdAt)}</span>
      ),
    },
    {
      header: 'Actions',
      cell: (lead) => (
        <Link href={`/admin/leads/${lead.id}`}>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-1" /> View
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={leads}
      total={total}
      page={page}
      pageSize={pageSize}
      onPageChange={onPageChange}
      isLoading={isLoading}
      emptyTitle="No leads found"
      emptyDescription="Try adjusting your search query or filter parameters."
    />
  );
}
