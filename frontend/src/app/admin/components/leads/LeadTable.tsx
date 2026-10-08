'use client';

import React from 'react';
import Link from 'next/link';
import { Lead } from '../../types/lead';
import { DataTable, Column } from '../common/DataTable';
import { LeadStatusBadge } from './LeadStatusBadge';
import { formatDate } from '../../lib/utils';
import { Eye, Phone, Mail, ArrowUpRight } from 'lucide-react';
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
      header: 'Student Profile',
      cell: (lead) => (
        <div>
          <Link
            href={`/admin/leads/${lead.id}`}
            className="font-bold text-sm text-slate-900 hover:text-[#25347B] transition-colors inline-flex items-center gap-1"
          >
            {lead.fullName}
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3 text-slate-400" /> {lead.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3 text-slate-400" /> {lead.phone}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: 'Preferences & Course',
      cell: (lead) => (
        <div>
          <span className="font-semibold text-xs text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/70 inline-block mb-1">
            {lead.countryPreference?.join(', ') || 'Any Destination'}
          </span>
          <p className="text-xs text-slate-500 line-clamp-1">
            {lead.coursePreference || 'General Academic Counselling'}
          </p>
        </div>
      ),
    },
    {
      header: 'Pipeline Status',
      cell: (lead) => <LeadStatusBadge status={lead.status} />,
    },
    {
      header: 'Channel Source',
      cell: (lead) => (
        <span className="inline-flex items-center text-xs font-medium text-slate-600 capitalize bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md">
          {lead.source?.replace('_', ' ') || 'Website'}
        </span>
      ),
    },
    {
      header: 'Enquiry Date',
      cell: (lead) => (
        <span className="text-xs font-mono text-slate-500">
          {formatDate(lead.createdAt)}
        </span>
      ),
    },
    {
      header: 'Action',
      cell: (lead) => (
        <Link href={`/admin/leads/${lead.id}`}>
          <Button variant="outline" size="sm" className="h-7.5 px-2.5 text-xs font-semibold text-slate-700 hover:text-[#25347B] hover:border-[#25347B]">
            <Eye className="h-3.5 w-3.5 mr-1" />
            View
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
      emptyTitle="No student enquiries found"
      emptyDescription="Try adjusting your search query, status filter, or channel."
    />
  );
}
