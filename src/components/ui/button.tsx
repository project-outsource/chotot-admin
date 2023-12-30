import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '../../assets/icons';

const buttonVariants = cva(
  'inline-flex items-center active:scale-90 justify-center rounded-sm text-sm font-medium ring-offset-background transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        filled: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-btn',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary:
          'bg-main-dark-gray shadow-btn text-white hover:bg-main-dark-gray-hovered active:bg-main-dark-gray disabled:bg-disabled-grey',
        terq: 'bg-main-terq shadow-btn text-white hover:bg-main-terq-hovered active:bg-main-terq-clicked disabled:bg-main-terq-disable',
        white:
          'bg-white shadow-btn text-main-dark-blue disabled:text-white hover:text-main-dark-blue-hovered active:bg-main-blue-background disabled:bg-disabled-grey',
      },
      rounded: {
        default: 'rounded-sm',
        full: 'rounded-full',
        md: 'rounded-md',
        sm: 'rounded-sm',
        none: 'rounded-none',
      },
      size: {
        default: 'h-14 px-3 text-sm',
        md: 'h-11 px-5 py-2',
        sm: 'h-9 px-6 text-sm',
        xs: 'h-8 px-3 text-xs',
        mixin: 'p-0',
        icon: 'h-6 w-h-6 rounded-full active:scale-100',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'default',
      rounded: 'default',
    },
  }
);

const LoadingIcon = ({ className, size = '1rem' }: { className?: string; size?: string }) => {
  return <Icons.spinner size={size} className={cn('animate-spin ', className)} />;
};
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, type = 'button', size, fullWidth, rounded, asChild = false, loading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        disabled={props.disabled ?? loading}
        className={cn(fullWidth && 'w-full', buttonVariants({ variant, rounded, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {children}
            {loading && <LoadingIcon className="ml-4" />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants, LoadingIcon };
