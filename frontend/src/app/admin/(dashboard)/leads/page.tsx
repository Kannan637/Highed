'use client';

import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { LeadTable } from '../../components/leads/LeadTable';
import { LeadFilters } from '../../components/leads/LeadFilters';
import { useLeads } from '../../hooks/useLeads';
import { Button } from '../../components/ui/button';
import { Download, RefreshCw } from 'lucide-react';

export default function LeadsPage() {
  const {
    leads,
    total,
    page,
    pageSize,
    isLoading,
    filters,
    setPage,
    setFilters,
    refresh,
  } = useLeads();

  const handleExportCSV = () => {
    alert('Exporting leads data to CSV...');
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Student Leads & Enquiries"
        description="Track incoming student enquiries from website forms, WhatsApp, and physical education fairs."
        actions={
          <div className="flex items-center gap-2.5">
            <Button variant="outline" onClick={refresh}>
              <RefreshCw className="h-4 w-4 mr-2" /> Refresh
            </Button>
            <Button variant="outline" onClick={handleExportCSV}>
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          </div>
        }
      />

      <LeadFilters filters={filters} onChange={setFilters} />

      <LeadTable
        leads={leads}
        total={total}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        isLoading={isLoading}
      />
    </div>
  );
}
