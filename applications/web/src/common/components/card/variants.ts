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
    description: 'group/card-description text-xs leading-snug text-muted-foreground',
    content: 'group/card-content px-4 pb-4',
    footer: 'group/card-footer flex items-center gap-2 px-4 pb-4',
  },
  variants: {
    variant: {
      transparent: {
        root: '',
      },
      default: {
        root: 'border border-border bg-card text-card-foreground shadow-xs',
      },
      secondary: {
        root: 'border border-transparent bg-secondary text-secondary-foreground shadow-xs',
        description: 'text-secondary-foreground/60',
      },
      tertiary: {
        root: 'border border-transparent bg-muted text-foreground',
      },
    },
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
