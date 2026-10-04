'use client';

import React, { useState } from 'react';
import { CreateTestimonialInput } from '../../types/testimonial';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select } from '../ui/select';
import { Button } from '../ui/button';

interface TestimonialFormProps {
  initialData?: Partial<CreateTestimonialInput>;
  onSubmit: (data: CreateTestimonialInput) => Promise<void>;
  isLoading?: boolean;
}

export function TestimonialForm({ initialData, onSubmit, isLoading }: TestimonialFormProps) {
  const [formData, setFormData] = useState<CreateTestimonialInput>({
    studentName: initialData?.studentName || '',
    course: initialData?.course || '',
    university: initialData?.university || '',
    country: initialData?.country || 'United Kingdom',
    rating: initialData?.rating || 5,
    review: initialData?.review || '',
    videoUrl: initialData?.videoUrl || '',
    status: initialData?.status || 'published',
    featured: initialData?.featured || false,
    intakeYear: initialData?.intakeYear || '2026',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Student Success Story
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Student Full Name *
            </label>
            <Input
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="e.g. Ramesh Kannan"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Course Admitted *
            </label>
            <Input
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              placeholder="e.g. MSc Data Science & AI"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              University *
            </label>
            <Input
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              placeholder="e.g. University of Leeds"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Country *
            </label>
            <Input
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              placeholder="UK, USA, Germany..."
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Intake Year
            </label>
            <Input
              value={formData.intakeYear || ''}
              onChange={(e) => setFormData({ ...formData, intakeYear: e.target.value })}
              placeholder="2026"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Student Review & Testimonial *
          </label>
          <Textarea
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            placeholder="Share the student's counselling experience with HighEd..."
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Rating (1 to 5)
            </label>
            <Select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Status
            </label>
            <Select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="hidden">Hidden</option>
            </Select>
          </div>

          <div className="flex items-center pt-6">
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              Feature on Homepage
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Save Testimonial
        </Button>
      </div>
    </form>
  );
}
