import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const cardVariants = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    root: 'group/card flex flex-col overflow-hidden rounded-xl',
    header: 'group/card-header flex flex-col gap-0.5 px-4 pt-4 pb-2',
    title: 'group/card-title text-sm font-semibold leading-none tracking-tight',
    description: 'group/card-description text-xs leading-snug opacity-60',
    content: 'group/card-content px-4 pb-4',
    footer: 'group/card-footer flex items-center gap-2 px-4 pb-4',
  },
  variants: {
    variant: {
      transparent: {
        root: '',
      },
      default: {
        root: 'border border-border bg-surface-default text-surface-foreground-default shadow-xs',
      },
      secondary: {
        root: 'border border-border bg-surface-secondary text-surface-foreground-secondary shadow-xs',
      },
      tertiary: {
        root: 'border border-border bg-surface-tertiary text-surface-foreground-tertiary',
      },
    },
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
