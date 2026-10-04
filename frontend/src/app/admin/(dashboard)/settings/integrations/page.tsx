'use client';

import React, { useState } from 'react';
import { PageHeader } from '../../../components/common/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, MessageSquare, Webhook } from 'lucide-react';
import Link from 'next/link';

export default function IntegrationsSettingsPage() {
  const [whatsappApiKey, setWhatsappApiKey] = useState('wa_live_••••••••••••');
  const [webhookUrl, setWebhookUrl] = useState('https://api.crm.highed.in/webhooks/leads');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Integration credentials saved!');
    }, 600);
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
        title="API Keys & Integrations"
        description="Connect WhatsApp Business Cloud API and CRM webhook destinations."
      />

      <form onSubmit={handleSave} className="space-y-6">
        {/* WhatsApp Business API */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-emerald-600" />
              <CardTitle>WhatsApp Business Cloud API</CardTitle>
            </div>
            <CardDescription>
              Delivers automated WhatsApp instant brochures and student verification messages.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">
                API Token / System User Access Token
              </label>
              <Input
                type="password"
                value={whatsappApiKey}
                onChange={(e) => setWhatsappApiKey(e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Webhook Destinations */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Webhook className="h-5 w-5 text-indigo-600" />
              <CardTitle>Inbound Lead Webhooks</CardTitle>
            </div>
            <CardDescription>
              Forward new student enquiries to external CRM or counseling dispatch endpoints.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">
                Webhook URL Endpoint
              </label>
              <Input
                type="url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button type="submit" isLoading={isSaving}>
            Save Credentials
          </Button>
        </div>
      </form>
    </div>
  );
}
