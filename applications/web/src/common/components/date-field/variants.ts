import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const dateFieldVariants = tv({
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
    segment: [
      'px-0.5 text-sm outline-none rounded caret-transparent tabular-nums',
      'data-focused:bg-primary data-focused:text-primary-foreground',
      'data-placeholder:text-muted-foreground',
      'data-[type=literal]:text-muted-foreground data-[type=literal]:px-0',
    ],
  },
});

export type DateFieldVariants = VariantProps<typeof dateFieldVariants>;
