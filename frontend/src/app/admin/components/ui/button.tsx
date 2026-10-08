import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium select-none cursor-pointer transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25347B]/20',
  {
    variants: {
      variant: {
        default:
          'bg-[#25347B] text-white shadow-xs hover:bg-[#1b265b] border border-[#25347B] active:translate-y-[0.5px]',
        accent:
          'bg-[#E93F61] text-white shadow-xs hover:bg-[#c72c4c] border border-[#E93F61] active:translate-y-[0.5px]',
        destructive:
          'bg-rose-600 text-white shadow-xs hover:bg-rose-700 border border-rose-600 active:translate-y-[0.5px]',
        outline:
          'border border-slate-200 bg-white text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300',
        secondary:
          'bg-slate-100 text-slate-800 shadow-2xs hover:bg-slate-200/80 border border-transparent',
        ghost:
          'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
        link:
          'text-[#25347B] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-9 px-3.5 py-2 text-sm',
        sm: 'h-8 rounded-md px-2.5 text-xs font-medium',
        lg: 'h-10 rounded-lg px-5 text-sm font-semibold',
        icon: 'size-9 p-0',
        'icon-sm': 'size-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        data-loading={isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
