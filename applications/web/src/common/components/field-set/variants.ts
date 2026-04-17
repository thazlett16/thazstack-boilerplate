import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const fieldSetVariants = tv({
  base: [
    'flex flex-col gap-4',
    // 'data-disabled:',
    // 'data-invalid:',
  ],
});

export type FieldSetVariants = VariantProps<typeof fieldSetVariants>;
