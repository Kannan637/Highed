'use client';

import React from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

interface SEOFieldsProps {
  seo?: SEOData;
  onChange: (seo: SEOData) => void;
}

export function SEOFields({ seo = {}, onChange }: SEOFieldsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
      <h3 className="text-lg font-semibold text-slate-900">
        Search Engine Optimization (SEO)
      </h3>

      <div>
        <label className="text-sm font-medium text-slate-700 block mb-1.5">
          Meta Title
        </label>
        <Input
          value={seo.metaTitle || ''}
          onChange={(e) => onChange({ ...seo, metaTitle: e.target.value })}
          placeholder="Recommended: 50-60 characters"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 block mb-1.5">
          Meta Description
        </label>
        <Textarea
          value={seo.metaDescription || ''}
          onChange={(e) => onChange({ ...seo, metaDescription: e.target.value })}
          placeholder="Recommended: 150-160 characters describing the article"
          rows={3}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 block mb-1.5">
          Canonical URL
        </label>
        <Input
          value={seo.canonicalUrl || ''}
          onChange={(e) => onChange({ ...seo, canonicalUrl: e.target.value })}
          placeholder="https://highed.in/blog/your-slug"
        />
      </div>
    </div>
  );
}
