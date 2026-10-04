'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Content modal */}
      <div
        className={cn(
          'relative z-50 w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-xl',
          className
        )}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          {title && <h2 className="text-lg font-bold text-slate-900">{title}</h2>}
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {description && (
          <p className="text-sm text-slate-500 mb-4">{description}</p>
        )}

        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
