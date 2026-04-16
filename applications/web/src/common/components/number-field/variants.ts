import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const numberFieldVariants = tv({
  slots: {
    root: 'flex flex-col gap-1.5',
    group: [
      'flex items-center h-9 rounded-lg border border-foreground/15 overflow-hidden transition-colors',
      'data-focus-within:ring-2 data-focus-within:ring-primary data-focus-within:border-foreground/30',
      'data-hovered:border-foreground/30',
      'data-invalid:border-danger',
      'data-disabled:opacity-50',
    ],
    input: 'flex-1 h-full px-3 text-sm bg-background outline-none min-w-0 text-foreground',
    stepperButton: [
      'flex items-center justify-center w-8 h-full bg-muted text-muted-foreground shrink-0',
      'border-l border-foreground/10 outline-none transition-colors',
      'first:border-l-0 first:border-r',
      'data-hovered:bg-muted-hover',
      'data-pressed:bg-muted-hover',
      'data-focus-visible:ring-2 data-focus-visible:ring-inset data-focus-visible:ring-primary',
      'data-disabled:opacity-50',
    ],
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>;
