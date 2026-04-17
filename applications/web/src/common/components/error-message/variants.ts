import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const errorMessageVariants = tv({
  slots: {
    root: 'text-xs text-danger',
  },
});

export type ErrorMessageVariants = VariantProps<typeof errorMessageVariants>;
