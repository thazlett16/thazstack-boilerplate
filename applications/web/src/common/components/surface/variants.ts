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
        root: 'bg-surface-default text-surface-default-foreground [--layer-bg:var(--surface-default)] [--field-bg:var(--surface-secondary)]',
      },
      secondary: {
        root: 'bg-surface-secondary text-surface-secondary-foreground [--layer-bg:var(--surface-secondary)] [--field-bg:var(--surface-tertiary)]',
      },
      tertiary: {
        root: 'bg-surface-tertiary text-surface-tertiary-foreground [--layer-bg:var(--surface-tertiary)] [--field-bg:var(--surface-tertiary)]',
      },
    },
  },
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;
export type SlotsSurfaceVariants = ReturnType<typeof surfaceVariants>;
export type RequiredSurfaceVariants = Required<SetNonNullable<SurfaceVariants>>;
