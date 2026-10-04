'use client';

import React, { useState } from 'react';
import { PageHeader } from '../../../components/common/PageHeader';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GeneralSettingsPage() {
  const [formData, setFormData] = useState({
    consultancyName: 'HighEd Study Abroad',
    primaryEmail: 'info@highed.in',
    primaryPhone: '+91 94440 12345',
    whatsappNumber: '+91 94440 12345',
    headOfficeAddress: 'Anna Nagar, Chennai, Tamil Nadu - 600040',
    primaryIntake: 'Fall 2026',
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('General settings saved!');
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
        title="General Consultancy Settings"
        description="Public contact details, primary office address, and default settings."
      />

      <form onSubmit={handleSave} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Consultancy Identity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">
                  Brand Name
                </label>
                <Input
                  value={formData.consultancyName}
                  onChange={(e) =>
                    setFormData({ ...formData, consultancyName: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">
                  Primary Contact Email
                </label>
                <Input
                  type="email"
                  value={formData.primaryEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryEmail: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">
                  Helpline Phone Number
                </label>
                <Input
                  value={formData.primaryPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryPhone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">
                  Official WhatsApp Number
                </label>
                <Input
                  value={formData.whatsappNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, whatsappNumber: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1.5">
                Head Office Address
              </label>
              <Input
                value={formData.headOfficeAddress}
                onChange={(e) =>
                  setFormData({ ...formData, headOfficeAddress: e.target.value })
                }
                required
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button type="submit" isLoading={isSaving}>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
