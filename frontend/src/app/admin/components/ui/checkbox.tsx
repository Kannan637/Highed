'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, checked, onChange, disabled, ...props }, ref) => {
    return (
      <label className={cn('inline-flex items-center gap-2.5 cursor-pointer select-none text-sm text-slate-700', disabled && 'opacity-50 cursor-not-allowed')}>
        <span className="relative flex items-center justify-center">
          <input
            type="checkbox"
            ref={ref}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={cn(
              'peer h-4.5 w-4.5 shrink-0 appearance-none rounded border border-slate-300 bg-white checked:bg-slate-900 checked:border-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 transition-colors',
              className
            )}
            {...props}
          />
          <Check className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100" />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
