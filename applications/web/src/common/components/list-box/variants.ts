import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const listBoxVariants = tv({
  slots: {
    root: 'outline-none p-1 min-w-[200px]',
    item: [
      'relative flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg cursor-default select-none outline-none transition-colors',
      'data-hovered:bg-muted',
      'data-focused:bg-muted',
      'data-selected:bg-primary data-selected:text-primary-foreground',
      'data-disabled:opacity-50',
      'data-focus-visible:ring-2 data-focus-visible:ring-primary',
    ],
    section: 'pt-1 pb-1 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-foreground/10',
    sectionHeader: 'px-3 py-1 text-xs font-medium text-muted-foreground',
  },
});

export type ListBoxVariants = VariantProps<typeof listBoxVariants>;
