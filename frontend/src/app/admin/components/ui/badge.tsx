import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none select-none',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-slate-900 text-white shadow-2xs hover:bg-slate-800',
        secondary:
          'border-slate-200/80 bg-slate-100 text-slate-700 hover:bg-slate-200/70',
        destructive:
          'border-red-200 bg-red-50 text-red-700 hover:bg-red-100',
        success:
          'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
        warning:
          'border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100',
        outline:
          'border-slate-200 text-slate-700 bg-white hover:bg-slate-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
