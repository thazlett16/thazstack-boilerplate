import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const surfaceVariants = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    root: 'group/surface',
  },
  variants: {
    variant: {
      default: {
        root: 'bg-surface-default text-surface-foreground-default',
      },
      secondary: {
        root: 'bg-surface-secondary text-surface-foreground-secondary',
      },
      tertiary: {
        root: 'bg-surface-tertiary text-surface-foreground-tertiary',
      },
    },
  },
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;
