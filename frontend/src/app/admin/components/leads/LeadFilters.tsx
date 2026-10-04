'use client';

import React from 'react';
import { SearchInput } from '../common/SearchInput';
import { Select } from '../ui/select';
import { LeadFilterParams, LeadStatus } from '../../types/lead';

interface LeadFiltersProps {
  filters: LeadFilterParams;
  onChange: (filters: LeadFilterParams) => void;
}

export function LeadFilters({ filters, onChange }: LeadFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full mb-6">
      <SearchInput
        value={filters.search || ''}
        onChange={(val) => onChange({ ...filters, search: val })}
        placeholder="Search name, email, or phone..."
        className="w-full sm:max-w-sm"
      />

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Select
          value={filters.status || 'all'}
          onChange={(e) =>
            onChange({
              ...filters,
              status: e.target.value as LeadStatus | 'all',
            })
          }
          className="w-full sm:w-48"
        >
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="counseling_scheduled">Counseling Scheduled</option>
          <option value="applied">Applied</option>
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
          className="w-full sm:w-44"
        >
          <option value="all">All Sources</option>
          <option value="website_form">Website Form</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="event">Event / Fair</option>
          <option value="referral">Referral</option>
        </Select>
      </div>
    </div>
  );
}
