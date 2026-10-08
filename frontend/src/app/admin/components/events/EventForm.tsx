'use client';

import React, { useState } from 'react';
import { CreateEventInput } from '../../types/event';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select } from '../ui/select';
import { Button } from '../ui/button';
import { slugify } from '../../lib/utils';
import { AlertCircle } from 'lucide-react';
import { eventSchema } from '../../lib/validations/event';

interface EventFormProps {
  initialData?: Partial<CreateEventInput>;
  onSubmit: (data: CreateEventInput) => Promise<void>;
  isLoading?: boolean;
}

export function EventForm({ initialData, onSubmit, isLoading }: EventFormProps) {
  const [formData, setFormData] = useState<CreateEventInput>({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    date: initialData?.date || '',
    startTime: initialData?.startTime || '10:00 AM',
    endTime: initialData?.endTime || '05:00 PM',
    location: initialData?.location || '',
    city: initialData?.city || 'Chennai',
    mode: initialData?.mode || 'offline',
    status: initialData?.status || 'draft',
    capacity: initialData?.capacity || 200,
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleTitleChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: slugify(val),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const validation = eventSchema.safeParse(formData);
    if (!validation.success) {
      setValidationError(validation.error.issues[0]?.message || 'Please check event details');
      return;
    }

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {validationError && (
        <div className="flex items-center gap-2 p-3 text-xs font-medium text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{validationError}</span>
        </div>
      )}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Event Details</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Event Title *
            </label>
            <Input
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. UK Admissions Fair 2026"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              URL Slug *
            </label>
            <Input
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="uk-admissions-fair-2026"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Description *
          </label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Detailed agenda, key university delegates, and expectations..."
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Event Date *
            </label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Start Time *
            </label>
            <Input
              value={formData.startTime}
              onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              placeholder="10:00 AM"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              End Time *
            </label>
            <Input
              value={formData.endTime}
              onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              placeholder="05:00 PM"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Mode *
            </label>
            <Select
              value={formData.mode}
              onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
            >
              <option value="offline">In-Person (Offline)</option>
              <option value="online">Virtual (Online)</option>
              <option value="hybrid">Hybrid</option>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Status *
            </label>
            <Select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Capacity Limit
            </label>
            <Input
              type="number"
              value={formData.capacity || ''}
              onChange={(e) => setFormData({ ...formData, capacity: Number(e.target.value) })}
              placeholder="e.g. 300"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Location Venue / Link *
          </label>
          <Input
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Taj Connemara, Binny Road, Chennai"
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Save Event
        </Button>
      </div>
    </form>
  );
}
