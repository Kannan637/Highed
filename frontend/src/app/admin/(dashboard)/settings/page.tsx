'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '../../components/common/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Settings, Bell, Webhook, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

const settingSections = [
  {
    title: 'General Settings',
    description: 'Company information, consultancy contact numbers, address, and default intake configurations.',
    href: '/admin/settings/general',
    icon: Settings,
  },
  {
    title: 'Notification Preferences',
    description: 'Email alerts for new incoming student leads, event registration notifications, and SMS triggers.',
    href: '/admin/settings/notifications',
    icon: Bell,
  },
  {
    title: 'Integrations & API Keys',
    description: 'WhatsApp Business API and CRM Webhook endpoints.',
    href: '/admin/settings/integrations',
    icon: Webhook,
  },
];

export default function SettingsIndexPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Settings & Configuration"
        description="Global system parameters, third-party credentials, and notification thresholds."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {settingSections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <Link key={idx} href={sec.href} className="group">
              <Card className="h-full transition-all group-hover:border-indigo-500 group-hover:shadow-md">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base group-hover:text-indigo-600 transition-colors">
                    {sec.title}
                  </CardTitle>
                  <CardDescription>{sec.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-xs font-semibold text-indigo-600 group-hover:underline">
                    Configure <ArrowRight className="h-3 w-3 ml-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
