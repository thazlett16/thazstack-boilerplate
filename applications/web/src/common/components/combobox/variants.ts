import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const comboboxVariants = tv({
  slots: {
    // Root field wrapper
    root: 'flex flex-col gap-1.5',
    // Input + button row
    group: [
      'flex items-center h-9 rounded-lg border border-foreground/15 bg-background overflow-hidden transition-colors',
      // [data-hovered]
      'data-hovered:border-foreground/30',
      // [data-focus-within]
      'data-focus-within:border-foreground/30 data-focus-within:ring-2 data-focus-within:ring-primary',
      // [data-invalid]
      'data-invalid:border-danger',
      // [data-disabled]
      'data-disabled:opacity-50',
      // [data-open]
      'data-open:border-foreground/30',
    ],
    // Text input inside the group
    input: 'flex-1 h-full px-3 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground',
    // Dropdown trigger button
    trigger: [
      'flex items-center justify-center w-8 h-full shrink-0 text-muted-foreground',
      'border-l border-foreground/10 outline-none transition-colors',
      // [data-hovered]
      'data-hovered:bg-muted data-hovered:text-foreground',
      // [data-pressed]
      'data-pressed:bg-muted-hover',
      // [data-focus-visible]
      'data-focus-visible:ring-2 data-focus-visible:ring-inset data-focus-visible:ring-primary',
    ],
    // Popover panel
    popover: [
      'min-w-[var(--trigger-width)] overflow-auto rounded-xl border border-foreground/15',
      'bg-surface-default shadow-lg outline-none p-1',
      'data-entering:animate-in data-entering:fade-in-0 data-entering:zoom-in-95',
      'data-exiting:animate-out data-exiting:fade-out-0 data-exiting:zoom-out-95',
      'data-[placement=bottom]:slide-in-from-top-2 data-[placement=top]:slide-in-from-bottom-2',
    ],
  },
});

export type ComboboxVariants = VariantProps<typeof comboboxVariants>;
