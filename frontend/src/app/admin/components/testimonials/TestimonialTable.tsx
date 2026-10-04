'use client';

import React from 'react';
import Link from 'next/link';
import { AdminTestimonial } from '../../types/testimonial';
import { DataTable, Column } from '../common/DataTable';
import { TestimonialStatusBadge } from './TestimonialStatusBadge';
import { Star, Eye } from 'lucide-react';
import { Button } from '../ui/button';

interface TestimonialTableProps {
  testimonials: AdminTestimonial[];
  isLoading: boolean;
}

export function TestimonialTable({ testimonials, isLoading }: TestimonialTableProps) {
  const columns: Column<AdminTestimonial>[] = [
    {
      header: 'Student',
      cell: (t) => (
        <div>
          <span className="font-semibold text-sm text-slate-900">{t.studentName}</span>
          <p className="text-xs text-slate-500 mt-0.5">{t.course}</p>
        </div>
      ),
    },
    {
      header: 'University & Country',
      cell: (t) => (
        <div>
          <span className="font-medium text-sm text-slate-800">{t.university}</span>
          <p className="text-xs text-slate-500 mt-0.5">{t.country}</p>
        </div>
      ),
    },
    {
      header: 'Rating',
      cell: (t) => (
        <div className="flex items-center text-amber-500">
          <Star className="h-4.5 w-4.5 fill-amber-400" />
          <span className="ml-1.5 text-sm font-semibold text-slate-700">
            {t.rating}/5
          </span>
        </div>
      ),
    },
    {
      header: 'Status',
      cell: (t) => <TestimonialStatusBadge status={t.status} />,
    },
    {
      header: 'Featured',
      cell: (t) => (
        <span
          className={`inline-block px-2.5 py-1 text-xs rounded-md font-semibold ${
            t.featured ? 'bg-amber-100 text-amber-800' : 'text-slate-400 bg-slate-100'
          }`}
        >
          {t.featured ? 'Featured' : 'Standard'}
        </span>
      ),
    },
    {
      header: 'Actions',
      cell: (t) => (
        <Link href={`/admin/testimonials/${t.id}`}>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-1" /> Edit
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
      emptyTitle="No testimonials found"
      emptyDescription="Add reviews and success stories from your placed students."
    />
  );
}
