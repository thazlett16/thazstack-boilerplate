import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const popoverVariants = tv({
  slots: {
    root: [
      'bg-surface-default border border-foreground/15 rounded-xl shadow-lg outline-none overflow-auto',
      'data-entering:animate-in data-entering:fade-in-0 data-entering:zoom-in-95',
      'data-exiting:animate-out data-exiting:fade-out-0 data-exiting:zoom-out-95',
      'data-[placement=bottom]:slide-in-from-top-2',
      'data-[placement=top]:slide-in-from-bottom-2',
    ],
    content: '',
  },
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
