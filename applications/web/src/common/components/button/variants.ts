import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';

export const buttonVariants = tv({
  base: [
    'group/button',
    'relative inline-flex items-center justify-center gap-2',
    'font-medium select-none cursor-default transition-colors outline-none',
    '[-webkit-tap-highlight-color:transparent]',
    'data-disabled:opacity-50 data-disabled:pointer-events-none',
    'data-focus-visible:ring-2 data-focus-visible:ring-offset-2',
    // 'data-focused:',
    // 'data-hovered:',
    'data-pending:cursor-wait',
    // 'data-pressed:',
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    isInverted: false,
    fullWidth: false,
  },
  variants: {
    variant: {
      primary: [
        'bg-primary text-primary-foreground',
        'data-hovered:bg-primary-hover',
        'data-pressed:bg-primary-hover data-pressed:brightness-95',
        'data-focus-visible:ring-primary',
      ],
      secondary: [
        'bg-secondary text-secondary-foreground',
        'data-hovered:bg-secondary-hover',
        'data-pressed:bg-secondary-hover data-pressed:brightness-95',
        'data-focus-visible:ring-secondary',
      ],
      danger: [
        'bg-danger text-danger-foreground',
        'data-hovered:bg-danger-hover',
        'data-pressed:bg-danger-hover data-pressed:brightness-95',
        'data-focus-visible:ring-danger',
      ],
      success: [
        'bg-success text-success-foreground',
        'data-focus-visible:ring-success',
        'data-hovered:bg-success-hover',
        'data-pressed:bg-success-hover data-pressed:brightness-95',
      ],
      warning: [
        'bg-warning text-warning-foreground',
        'data-focus-visible:ring-warning',
        'data-hovered:bg-warning-hover',
        'data-pressed:bg-warning-hover data-pressed:brightness-95',
      ],
      ghost: [
        'bg-transparent text-foreground',
        'data-focus-visible:ring-foreground',
        'data-hovered:bg-muted',
        'data-pressed:bg-muted-hover',
        'data-disabled:bg-transparent',
      ],
      outline: [
        'border border-foreground/15 bg-transparent text-foreground',
        'data-focus-visible:ring-foreground',
        'data-hovered:bg-muted',
        'data-pressed:bg-muted-hover',
        'data-disabled:bg-transparent',
      ],
    },
    size: {
      sm: 'h-7 px-2.5 text-xs rounded-md',
      md: 'h-9 px-3.5 text-sm rounded-lg',
      lg: 'h-11 px-5 text-base rounded-lg',
      smIcon: 'size-7 rounded-md p-0 m-0',
      mdIcon: 'size-9 rounded-md p-0 m-0',
      lgIcon: 'size-11 rounded-md p-0 m-0',
    },
    fullWidth: {
      true: 'w-full',
    },
    isInverted: { true: '' },
  },
  compoundVariants: [
    {
      variant: 'primary',
      isInverted: true,
      class: [
        'bg-primary-inv text-primary-inv-foreground',
        'data-hovered:bg-primary-inv-hover',
        'data-pressed:bg-primary-inv-hover data-pressed:brightness-95',
      ],
    },
    {
      variant: 'secondary',
      isInverted: true,
      class: [
        'bg-secondary-inv text-secondary-inv-foreground',
        'data-hovered:bg-secondary-inv-hover',
        'data-pressed:bg-secondary-inv-hover data-pressed:brightness-95',
      ],
    },
    {
      variant: 'danger',
      isInverted: true,
      class: [
        'bg-danger-inv text-danger-inv-foreground',
        'data-hovered:bg-danger-inv-hover',
        'data-pressed:bg-danger-inv-hover data-pressed:brightness-95',
      ],
    },
    {
      variant: 'success',
      isInverted: true,
      class: [
        'bg-success-inv text-success-inv-foreground',
        'data-hovered:bg-success-inv-hover',
        'data-pressed:bg-success-inv-hover data-pressed:brightness-95',
      ],
    },
    {
      variant: 'warning',
      isInverted: true,
      class: [
        'bg-warning-inv text-warning-inv-foreground',
        'data-hovered:bg-warning-inv-hover',
        'data-pressed:bg-warning-inv-hover data-pressed:brightness-95',
      ],
    },
  ],
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
// export type SlotsButtonVariants = ReturnType<typeof buttonVariants>;
export type RequiredButtonVariants = Required<SetNonNullable<ButtonVariants>>;
