import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-semibold tracking-tight transition-colors focus:outline-none select-none',
  {
    variants: {
      variant: {
        default:
          'border-[#25347B]/20 bg-[#25347B]/10 text-[#25347B]',
        accent:
          'border-[#E93F61]/25 bg-[#E93F61]/10 text-[#E93F61]',
        secondary:
          'border-slate-200/90 bg-slate-100 text-slate-700',
        destructive:
          'border-rose-200 bg-rose-50 text-rose-700',
        success:
          'border-emerald-200 bg-emerald-50 text-emerald-700',
        warning:
          'border-amber-200 bg-amber-50 text-amber-700',
        outline:
          'border-slate-200 text-slate-700 bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  const dotColorClass =
    variant === 'success'
      ? 'bg-emerald-500'
      : variant === 'warning'
      ? 'bg-amber-500'
      : variant === 'destructive'
      ? 'bg-rose-500'
      : variant === 'accent'
      ? 'bg-[#E93F61]'
      : variant === 'default'
      ? 'bg-[#25347B]'
      : 'bg-slate-400';

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full shrink-0', dotColorClass)} />}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
