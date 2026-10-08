'use client';

import React from 'react';
import Link from 'next/link';
import { AdminTestimonial } from '../../types/testimonial';
import { DataTable, Column } from '../common/DataTable';
import { TestimonialStatusBadge } from './TestimonialStatusBadge';
import { Star, Edit2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface TestimonialTableProps {
  testimonials: AdminTestimonial[];
  isLoading: boolean;
}

export function TestimonialTable({ testimonials, isLoading }: TestimonialTableProps) {
  const columns: Column<AdminTestimonial>[] = [
    {
      header: 'Student & Target Course',
      cell: (t) => (
        <div>
          <Link
            href={`/admin/testimonials/${t.id}`}
            className="font-bold text-sm text-slate-900 hover:text-[#25347B] transition-colors"
          >
            {t.studentName}
          </Link>
          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{t.course}</p>
        </div>
      ),
    },
    {
      header: 'Admitted University',
      cell: (t) => (
        <div>
          <span className="font-semibold text-xs text-slate-800 block">{t.university}</span>
          <span className="text-[11px] text-slate-500 font-medium block mt-0.5">{t.country}</span>
        </div>
      ),
    },
    {
      header: 'Student Rating',
      cell: (t) => (
        <div className="flex items-center text-amber-500 gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-slate-800">
            {t.rating}/5
          </span>
        </div>
      ),
    },
    {
      header: 'Review Status',
      cell: (t) => <TestimonialStatusBadge status={t.status} />,
    },
    {
      header: 'Placement',
      cell: (t) => (
        <Badge
          variant={t.featured ? 'accent' : 'secondary'}
          className="text-[11px] font-semibold"
        >
          {t.featured ? '★ Homepage Featured' : 'Standard'}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      cell: (t) => (
        <Link href={`/admin/testimonials/${t.id}`}>
          <Button variant="outline" size="sm" className="h-7.5 px-2.5 text-xs font-semibold text-slate-700 hover:text-[#25347B] hover:border-[#25347B]">
            <Edit2 className="h-3.5 w-3.5 mr-1" /> Edit
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={testimonials}
      isLoading={isLoading}
      emptyTitle="No student reviews yet"
      emptyDescription="Add verified student testimonials and admission success stories."
    />
  );
}
