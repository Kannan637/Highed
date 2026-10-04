'use client';

import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '../../../components/common/PageHeader';
import { LeadDetails } from '../../../components/leads/LeadDetails';
import { LeadTimeline } from '../../../components/leads/LeadTimeline';
import { LeadActions } from '../../../components/leads/LeadActions';
import { apiGetLeadById, apiUpdateLead, apiDeleteLead } from '../../../lib/api/leads';
import { Lead, LeadStatus } from '../../../types/lead';
import { LoadingState } from '../../../components/common/LoadingState';
import { Button } from '../../../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [lead, setLead] = useState<Lead | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLead() {
      setIsLoading(true);
      const res = await apiGetLeadById(id);
      if (res.success && res.data) {
        setLead(res.data);
      } else {
        // Mock fallback
        setLead({
          id,
          fullName: 'Ananya Sharma',
          email: 'ananya.sharma@example.com',
          phone: '+91 98765 43210',
          city: 'Chennai',
          countryPreference: ['United Kingdom', 'Ireland'],
          coursePreference: 'MSc Data Science & AI',
          intakePreference: 'Fall 2026',
          status: 'new',
          source: 'website_form',
          notes: 'Student scored 8.2 CGPA in B.Tech CSE. Interested in Russell Group universities.',
          timeline: [
            {
              id: 't-1',
              leadId: id,
              type: 'status_change',
              title: 'Lead Registered via Website Form',
              description: 'Submitted counselling request from /study-in/uk page.',
              actor: { id: 'sys', name: 'System', role: 'Automation' },
              createdAt: new Date().toISOString(),
            },
          ],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
      setIsLoading(false);
    }
    loadLead();
  }, [id]);

  const handleStatusChange = async (status: LeadStatus) => {
    if (!lead) return;
    await apiUpdateLead(id, { status });
    setLead({ ...lead, status });
  };

  const handleDelete = async () => {
    await apiDeleteLead(id);
    router.push('/admin/leads');
  };

  if (isLoading || !lead) {
    return <LoadingState message="Loading lead details..." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/admin/leads">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Leads
          </Button>
        </Link>
      </div>

      <PageHeader
        title={lead.fullName}
        description={`Lead Record #${lead.id}`}
        actions={
          <LeadActions
            lead={lead}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeadDetails lead={lead} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
          <h3 className="text-base font-semibold text-slate-900 mb-4">
            Activity Timeline
          </h3>
          <LeadTimeline timeline={lead.timeline} />
        </div>
      </div>
    </div>
  );
}
