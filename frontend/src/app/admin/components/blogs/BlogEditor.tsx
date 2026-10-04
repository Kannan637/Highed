'use client';

import React from 'react';
import { Textarea } from '../ui/textarea';

interface BlogEditorProps {
  value: string;
  onChange: (val: string) => void;
}

export function BlogEditor({ value, onChange }: BlogEditorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700">
          Article Body (Markdown / Rich HTML)
        </label>
        <span className="text-xs text-slate-400">Supports standard markdown formatting</span>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write the full study abroad article here..."
        className="min-h-[300px] font-mono text-sm leading-relaxed"
        required
      />
    </div>
  );
}
