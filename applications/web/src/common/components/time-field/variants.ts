import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const timeFieldVariants = tv({
  slots: {
    root: 'flex flex-col gap-1.5',
    input: [
      'flex h-9 items-center px-3 rounded-lg border border-foreground/15 bg-background text-sm transition-colors',
      'data-hovered:border-foreground/30',
      'data-focus-within:border-foreground/30',
      'data-focus-within:ring-2 data-focus-within:ring-primary',
      'data-invalid:border-danger',
      'data-disabled:opacity-50',
    ],
  },
});

export type TimeFieldVariants = VariantProps<typeof timeFieldVariants>;
