import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { LeadStatusBadge } from '../leads/LeadStatusBadge';
import { formatDate } from '../../lib/utils';
import { Lead } from '../../types/lead';
import { ArrowRight } from 'lucide-react';

interface RecentLeadsProps {
  leads?: Lead[];
}

const mockLeads: Partial<Lead>[] = [
  {
    id: 'lead-1',
    fullName: 'Ananya Sharma',
    countryPreference: ['UK', 'Ireland'],
    status: 'new',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'lead-2',
    fullName: 'Rahul Subramanian',
    countryPreference: ['Germany'],
    status: 'counseling_scheduled',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'lead-3',
    fullName: 'Kavitha Ramaswamy',
    countryPreference: ['Canada'],
    status: 'applied',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'lead-4',
    fullName: 'Vignesh Balaji',
    countryPreference: ['USA', 'Australia'],
    status: 'offer_received',
    createdAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: 'lead-5',
    fullName: 'Deepika Sundaram',
    countryPreference: ['Ireland'],
    status: 'visa_approved',
    createdAt: new Date(Date.now() - 345600000).toISOString(),
  },
];

export function RecentLeads({ leads }: RecentLeadsProps) {
  const displayLeads = leads && leads.length > 0 ? leads.slice(0, 5) : (mockLeads as Lead[]);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div>
          <CardTitle>Recent Student Leads</CardTitle>
          <CardDescription>Latest admissions enquiries across channels</CardDescription>
        </div>
        <Link
          href="/admin/leads"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25347B] hover:text-[#1b265b] transition-colors"
        >
          View all <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Target Countries</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayLeads.map((lead) => (
              <TableRow key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                <TableCell className="font-semibold text-slate-900">
                  <Link
                    href={`/admin/leads/${lead.id}`}
                    className="hover:underline hover:text-[#25347B] transition-colors"
                  >
                    {lead.fullName}
                  </Link>
                </TableCell>
                <TableCell className="text-slate-600 text-xs">
                  {lead.countryPreference?.join(', ') || 'Global'}
                </TableCell>
                <TableCell>
                  <LeadStatusBadge status={lead.status as any} />
                </TableCell>
                <TableCell className="text-right text-slate-500 font-mono text-xs">
                  {formatDate(lead.createdAt || new Date().toISOString())}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
