import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  slots: {
    root: 'group/button',
  },
  variants: {
    variant: {
      primary: {
        root: 'bg-primary text-primary-foreground hover:bg-primary-hover data-[hovered="true"]:bg-primary-hover',
      },
      secondary: {
        root: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover data-[hovered="true"]:bg-secondary-hover',
      },
      danger: {
        root: 'bg-danger text-danger-foreground hover:bg-danger-hover data-[hovered="true"]:bg-danger-hover',
      },
      success: {
        root: 'bg-success text-success-foreground hover:bg-success-hover data-[hovered="true"]:bg-success-hover',
      },
      warning: {
        root: 'bg-warning text-warning-foreground hover:bg-warning-hover data-[hovered="true"]:bg-warning:-hover',
      },
      ghost: {
        root: 'bg-muted text-muted-foreground hover:bg-ghost-hover data-[hovered="true"]:bg-ghost-hover',
      },
      outline: {
        root: '',
      },
    },
    size: {
      sm: {
        root: 'h-6 text-sm px-2 rounded-lg',
      },
      md: {
        root: 'h-7 px-2.5',
      },
      lg: {
        root: 'h-8 px-2.5',
      },
    },
    fullWidth: {
      true: {
        root: 'w-full',
      },
    },
    isInverted: { true: {} },
  },
  compoundVariants: [
    {
      variant: 'primary',
      isInverted: true,
      class: {
        root: 'bg-primary-inv text-primary-inv-foreground hover:bg-primary-inv-hover data-[hovered="true"]:bg-primary-inv-hover',
      },
    },
    {
      variant: 'secondary',
      isInverted: true,
      class: {
        root: 'bg-secondary-inv text-secondary-inv-foreground hover:bg-secondary-inv-hover data-[hovered="true"]:bg-secondary-inv-hover',
      },
    },
    {
      variant: 'success',
      isInverted: true,
      class: {
        root: 'bg-success-inv text-success-inv-foreground hover:bg-success-inv-hover data-[hovered="true"]:bg-success-inv-hover',
      },
    },
    {
      variant: 'warning',
      isInverted: true,
      class: {
        root: 'bg-warning-inv text-warning-inv-foreground hover:bg-warning-inv-hover data-[hovered="true"]:bg-warning-inv-hover',
      },
    },
    {
      variant: 'danger',
      isInverted: true,
      class: {
        root: 'bg-danger-inv text-danger-inv-foreground hover:bg-danger-inv-hover data-[hovered="true"]:bg-danger-inv-hover',
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    isInverted: false,
    fullWidth: false,
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
