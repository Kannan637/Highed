'use client';

import React, { useState } from 'react';
import { CreateBlogInput } from '../../types/blog';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select } from '../ui/select';
import { Button } from '../ui/button';
import { BlogEditor } from './BlogEditor';
import { SEOFields } from './SEOFields';
import { slugify } from '../../lib/utils';

interface BlogFormProps {
  initialData?: Partial<CreateBlogInput>;
  onSubmit: (data: CreateBlogInput) => Promise<void>;
  isLoading?: boolean;
}

export function BlogForm({ initialData, onSubmit, isLoading }: BlogFormProps) {
  const [formData, setFormData] = useState<CreateBlogInput>({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    category: initialData?.category || 'Study Destinations',
    tags: initialData?.tags || ['Study Abroad'],
    status: initialData?.status || 'draft',
    seo: initialData?.seo || {},
  });

  const handleTitleChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: slugify(val),
      seo: {
        ...prev.seo,
        metaTitle: val,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Blog Information</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Article Title *
            </label>
            <Input
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. How to get a UK Student Visa from Chennai"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Slug *
            </label>
            <Input
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Category *
            </label>
            <Select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="Study Destinations">Study Destinations</option>
              <option value="Scholarships">Scholarships</option>
              <option value="Visa Guides">Visa Guides</option>
              <option value="Exam Prep">Exam Prep (IELTS/GRE)</option>
              <option value="Student Life">Student Life</option>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Publication Status *
            </label>
            <Select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700 block mb-1.5">
            Short Excerpt / Summary *
          </label>
          <Textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Brief summary shown on blog cards..."
            rows={2}
            required
          />
        </div>

        <BlogEditor
          value={formData.content}
          onChange={(content) => setFormData({ ...formData, content })}
        />
      </div>

      <SEOFields
        seo={formData.seo}
        onChange={(seo) => setFormData({ ...formData, seo })}
      />

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Save Article
        </Button>
      </div>
    </form>
  );
}
