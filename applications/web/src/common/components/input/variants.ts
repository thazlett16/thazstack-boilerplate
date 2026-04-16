import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  slots: {
    root: [
      'w-full h-9 px-3 text-sm rounded-lg',
      'border border-foreground/15 bg-background text-foreground',
      'outline-none transition-colors',
      'data-hovered:border-foreground/30',
      'data-focused:border-foreground/30',
      'data-focus-visible:ring-2 data-focus-visible:ring-offset-0 data-focus-visible:ring-primary',
      'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
      'data-invalid:border-danger',
      'data-readonly:bg-muted data-readonly:cursor-default',
    ],
  },
});

export type InputVariants = ReturnType<typeof inputVariants>;
