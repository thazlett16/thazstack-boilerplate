import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const autocompleteVariants = tv({
  slots: {
    // Outer layout wrapper (not an RAC component — just a div)
    root: 'flex flex-col gap-1.5',
    // The text input
    input: [
      'w-full h-9 px-3 text-sm rounded-lg border border-foreground/15 bg-background text-foreground',
      'outline-none transition-colors placeholder:text-muted-foreground',
      // [data-hovered]
      'data-hovered:border-foreground/30',
      // [data-focused] / [data-focus-visible]
      'data-focused:border-foreground/30',
      'data-focus-visible:ring-2 data-focus-visible:ring-offset-0 data-focus-visible:ring-primary',
      // [data-disabled]
      'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
      // [data-invalid]
      'data-invalid:border-danger',
    ],
    // Inline suggestion list panel
    listbox: [
      'mt-1 overflow-auto rounded-xl border border-foreground/15 bg-surface-default shadow-lg outline-none p-1',
      // Hide when empty
      'data-empty:hidden',
    ],
  },
});

export type AutocompleteVariants = VariantProps<typeof autocompleteVariants>;
