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
        root: 'bg-surface-default text-surface-default-foreground',
      },
      secondary: {
        root: 'bg-surface-secondary text-surface-secondary-foreground',
      },
      tertiary: {
        root: 'bg-surface-tertiary text-surface-tertiary-foreground',
      },
    },
  },
});

export type SurfaceVariants = VariantProps<typeof surfaceVariants>;
export type SlotsSurfaceVariants = ReturnType<typeof surfaceVariants>;
export type RequiredSurfaceVariants = Required<SetNonNullable<SurfaceVariants>>;
