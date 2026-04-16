import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const dropdownVariants = tv({
  slots: {
    // Root field wrapper
    root: 'flex flex-col gap-1.5',
    // The trigger button (visible select control)
    trigger: [
      'flex items-center justify-between w-full h-9 px-3 gap-2',
      'text-sm rounded-lg border border-foreground/15 bg-background text-foreground',
      'outline-none cursor-default transition-colors',
      // [data-hovered]
      'data-hovered:border-foreground/30',
      // [data-focus-visible]
      'data-focus-visible:ring-2 data-focus-visible:ring-offset-0 data-focus-visible:ring-primary',
      // [data-invalid]
      'data-invalid:border-danger',
      // [data-disabled]
      'data-disabled:opacity-50',
    ],
    // SelectValue inside the trigger
    value: 'flex-1 text-left truncate data-placeholder:text-muted-foreground',
    // Chevron icon wrapper
    chevron: 'w-4 h-4 text-muted-foreground shrink-0',
    // Popover panel
    popover: [
      'min-w-[var(--trigger-width)] overflow-auto rounded-xl border border-foreground/15',
      'bg-surface-default shadow-lg outline-none p-1',
      // enter/exit animations
      'data-entering:animate-in data-entering:fade-in-0 data-entering:zoom-in-95',
      'data-exiting:animate-out data-exiting:fade-out-0 data-exiting:zoom-out-95',
      'data-[placement=bottom]:slide-in-from-top-2 data-[placement=top]:slide-in-from-bottom-2',
    ],
  },
});

export type DropdownVariants = VariantProps<typeof dropdownVariants>;
