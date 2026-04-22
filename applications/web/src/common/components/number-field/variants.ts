import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const numberFieldVariants = tv({
  base: ['group/number-field', 'relative inline-flex flex-col', 'm-0 min-w-0 border-0 p-0', 'gap-1'],
  variants: {
    fullWidth: {
      true: 'w-full',
    },
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>;
