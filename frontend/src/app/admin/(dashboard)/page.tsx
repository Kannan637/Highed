'use client';

import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { StatsCards } from '../components/dashboard/StatsCards';
import { LeadOverview } from '../components/dashboard/LeadOverview';
import { RecentLeads } from '../components/dashboard/RecentLeads';
import { UpcomingEvents } from '../components/dashboard/UpcomingEvents';
import { Button } from '../components/ui/button';
import { Plus, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Dashboard"
        description="Real-time consultancy overview, lead intake analytics, and active events."
        actions={
          <div className="flex items-center gap-2.5">
            <Link href="/admin/leads">
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" /> All Leads
              </Button>
            </Link>
            <Link href="/admin/events/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" /> New Event
              </Button>
            </Link>
          </div>
        }
      />

      {/* KPI Stats */}
      <StatsCards />

      {/* Pipeline & Analytics */}
      <LeadOverview />

      {/* Grid: Recent Leads & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentLeads />
        <UpcomingEvents />
      </div>
    </div>
  );
}
