import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';

export const surfaceVariants = tv({
  slots: {
    root: ['group/surface'],
  },
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      transparent: {
        root: 'bg-transparent',
      },
      default: {
        root: 'bg-surface-default text-surface-default-foreground [--field-bg:var(--surface-secondary)]',
      },
      secondary: {
        root: 'bg-surface-secondary text-surface-secondary-foreground [--field-bg:var(--surface-tertiary)]',
      },
      tertiary: {
        root: 'bg-surface-tertiary text-surface-tertiary-foreground [--field-bg:var(--surface-tertiary)]',
      },
    },
  },
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;
export type SlotsSurfaceVariants = ReturnType<typeof surfaceVariants>;
export type RequiredSurfaceVariants = Required<SetNonNullable<SurfaceVariants>>;
