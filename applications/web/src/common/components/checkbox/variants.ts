import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  slots: {
    root: [
      'group flex items-center gap-2 cursor-default select-none text-sm outline-none',
      'data-disabled:opacity-50',
      'data-focus-visible:ring-2 data-focus-visible:ring-primary data-focus-visible:rounded',
    ],
    indicator: [
      'w-4 h-4 rounded flex items-center justify-center border border-foreground/30 bg-background transition-colors shrink-0',
      'group-data-selected:bg-primary group-data-selected:border-primary',
      'group-data-indeterminate:bg-primary group-data-indeterminate:border-primary',
      'group-data-invalid:border-danger',
    ],
    label: 'text-sm text-foreground',
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
