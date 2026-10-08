'use client';

import React, { use, useEffect, useState } from 'react';
import { PageHeader } from '../../../../components/common/PageHeader';
import { RegistrationTable } from '../../../../components/events/RegistrationTable';
import { apiGetEventRegistrations } from '../../../../lib/api/events';
import { EventRegistration } from '../../../../types/registration';
import { Button } from '../../../../components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { downloadCSV } from '../../../../lib/utils';

export default function EventRegistrationsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [registrations, setRegistrations] = useState<EventRegistration[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const res = await apiGetEventRegistrations(id);
      if (res.success && res.data) {
        setRegistrations(res.data.items || []);
      } else {
        setRegistrations([
          {
            id: 'reg-1',
            eventId: id,
            fullName: 'Vignesh Balaji',
            email: 'vignesh.b@gmail.com',
            phone: '+91 99402 11223',
            city: 'Chennai',
            qualification: 'B.Tech IT (Final Year)',
            preferredCountry: 'United Kingdom',
            status: 'confirmed',
            registeredAt: new Date().toISOString(),
          },
          {
            id: 'reg-2',
            eventId: id,
            fullName: 'Divya Krishnan',
            email: 'divya.k@gmail.com',
            phone: '+91 98840 44556',
            city: 'Tambaram',
            qualification: 'B.Com Graduate',
            preferredCountry: 'Ireland',
            status: 'confirmed',
            registeredAt: new Date(Date.now() - 3600000).toISOString(),
          },
        ]);
      }
      setIsLoading(false);
    }
    load();
  }, [id]);

  const handleExport = () => {
    if (!registrations || registrations.length === 0) return;
    const exportRows = registrations.map((r) => ({
      ID: r.id,
      'Attendee Name': r.fullName,
      Email: r.email,
      Phone: r.phone,
      City: r.city || '',
      'Target Country': r.preferredCountry || '',
      Status: r.status,
      'Registered At': r.registeredAt || '',
    }));
    downloadCSV(`event_${id}_registrations.csv`, exportRows);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Link href={`/admin/events/${id}`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Event
          </Button>
        </Link>
      </div>

      <PageHeader
        title="Event Registrations & Attendees"
        description={`Attendees registered for Event #${id}`}
        actions={
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-1.5" /> Export Attendee List
          </Button>
        }
      />

      <RegistrationTable registrations={registrations} isLoading={isLoading} />
    </div>
  );
}
