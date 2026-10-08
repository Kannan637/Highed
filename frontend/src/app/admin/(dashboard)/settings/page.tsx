'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '../../components/common/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { Settings, Bell, Webhook, ArrowRight } from 'lucide-react';

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
    description: 'WhatsApp Business API and CRM Webhook endpoints for real-time lead sync.',
    href: '/admin/settings/integrations',
    icon: Webhook,
  },
];

export function SettingsIndexPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Settings & Configuration"
        description="Global system parameters, third-party credentials, and notification thresholds."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {settingSections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <Link key={idx} href={sec.href} className="group block h-full">
              <Card className="h-full transition-all duration-150 group-hover:border-[#25347B] group-hover:shadow-xs">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25347B]/10 text-[#25347B] mb-2.5 transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base font-bold text-slate-900 group-hover:text-[#25347B] transition-colors">
                    {sec.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed text-slate-500">
                    {sec.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-xs font-bold text-[#25347B] group-hover:underline">
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

export default SettingsIndexPage;
