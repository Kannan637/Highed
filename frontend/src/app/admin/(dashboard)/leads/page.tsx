'use client';

import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { LeadTable } from '../../components/leads/LeadTable';
import { LeadFilters } from '../../components/leads/LeadFilters';
import { useLeads } from '../../hooks/useLeads';
import { Button } from '../../components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import { downloadCSV, formatDate } from '../../lib/utils';

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
    if (!leads || leads.length === 0) return;
    const exportRows = leads.map((lead) => ({
      ID: lead.id,
      'Full Name': lead.fullName,
      Email: lead.email,
      Phone: lead.phone,
      City: lead.city || '',
      'Country Preferences': lead.countryPreference?.join(', ') || '',
      'Course Preference': lead.coursePreference || '',
      'Intake Preference': lead.intakePreference || '',
      Status: lead.status,
      Source: lead.source,
      'Created At': formatDate(lead.createdAt),
    }));
    downloadCSV(`highed_leads_export_${new Date().toISOString().slice(0, 10)}.csv`, exportRows);
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
