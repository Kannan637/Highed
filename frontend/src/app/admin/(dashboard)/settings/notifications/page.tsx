'use client';

import React, { useState } from 'react';
import { PageHeader } from '../../../components/common/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Bell, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function NotificationsSettingsPage() {
  const [leadAlertEmail, setLeadAlertEmail] = useState('leads@highed.in');
  const [eventAlertEmail, setEventAlertEmail] = useState('events@highed.in');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('highed_notification_settings');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.leadAlertEmail) setLeadAlertEmail(parsed.leadAlertEmail);
          if (parsed.eventAlertEmail) setEventAlertEmail(parsed.eventAlertEmail);
          if (typeof parsed.emailAlerts === 'boolean') setEmailAlerts(parsed.emailAlerts);
          if (typeof parsed.whatsappAlerts === 'boolean') setWhatsappAlerts(parsed.whatsappAlerts);
        } catch {
          // ignore corrupted data
        }
      }
    }
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'highed_notification_settings',
        JSON.stringify({ leadAlertEmail, eventAlertEmail, emailAlerts, whatsappAlerts })
      );
    }
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 400);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/admin/settings">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Settings
          </Button>
        </Link>
      </div>

      <PageHeader
        title="Notification Alerts & Routing"
        description="Configure dispatch channels for instant lead submissions and event registrations."
      />

      {saveSuccess && (
        <div className="flex items-center gap-2.5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          Notification preferences saved successfully.
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Inbound Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">
                New Lead Alert Recipient Email
              </label>
              <Input
                type="email"
                value={leadAlertEmail}
                onChange={(e) => setLeadAlertEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">
                Event Registration Alert Recipient Email
              </label>
              <Input
                type="email"
                value={eventAlertEmail}
                onChange={(e) => setEventAlertEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Send instant email alert when student requests counseling
              </label>

              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={whatsappAlerts}
                  onChange={(e) => setWhatsappAlerts(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Send WhatsApp confirmation to student upon form submission
              </label>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button type="submit" isLoading={isSaving}>
            Save Preferences
          </Button>
        </div>
      </form>
    </div>
  );
}
