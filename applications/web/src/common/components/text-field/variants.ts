import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const textFieldVariants = tv({
  slots: {
    root: ['flex flex-col gap-1.5', 'data-disabled:opacity-50'],
  },
});

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
