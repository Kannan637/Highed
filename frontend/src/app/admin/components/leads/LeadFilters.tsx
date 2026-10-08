'use client';

import React from 'react';
import { SearchInput } from '../common/SearchInput';
import { Select } from '../ui/select';
import { LeadFilterParams, LeadStatus } from '../../types/lead';
import { Filter, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';

interface LeadFiltersProps {
  filters: LeadFilterParams;
  onChange: (filters: LeadFilterParams) => void;
}

export function LeadFilters({ filters, onChange }: LeadFiltersProps) {
  const hasActiveFilters = Boolean(
    (filters.search && filters.search.trim().length > 0) ||
    (filters.status && filters.status !== 'all') ||
    (filters.source && filters.source !== 'all')
  );

  const handleReset = () => {
    onChange({
      ...filters,
      search: '',
      status: 'all',
      source: 'all',
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full mb-5 p-3 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
      {/* Search Bar */}
      <div className="w-full sm:max-w-md">
        <SearchInput
          value={filters.search || ''}
          onChange={(val) => onChange({ ...filters, search: val })}
          placeholder="Search student name, email, phone, or course..."
        />
      </div>

      {/* Dropdown Filters */}
      <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select
            value={filters.status || 'all'}
            onChange={(e) =>
              onChange({
                ...filters,
                status: e.target.value as LeadStatus | 'all',
              })
            }
            className="w-full sm:w-44"
          >
            <option value="all">All Statuses</option>
            <option value="new">New Enquiry</option>
            <option value="contacted">Contacted</option>
            <option value="counseling_scheduled">Counseling Scheduled</option>
            <option value="applied">Applied to University</option>
            <option value="offer_received">Offer Received</option>
            <option value="visa_approved">Visa Approved</option>
            <option value="enrolled">Enrolled</option>
            <option value="lost">Lost</option>
          </Select>

          <Select
            value={filters.source || 'all'}
            onChange={(e) =>
              onChange({
                ...filters,
                source: e.target.value as any,
              })
            }
            className="w-full sm:w-40"
          >
            <option value="all">All Channels</option>
            <option value="website_form">Website Form</option>
            <option value="whatsapp">WhatsApp Enquiry</option>
            <option value="event">Education Fair</option>
            <option value="referral">Student Referral</option>
          </Select>
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="h-9 px-2.5 text-xs text-slate-500 hover:text-slate-800 shrink-0"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
