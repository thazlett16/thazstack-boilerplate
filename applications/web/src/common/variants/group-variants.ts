import { tv } from 'tailwind-variants';

import { fieldBorderVariants } from '#src/common/variants/field-border-variants';
import { focusRingVariants } from '#src/common/variants/focus-ring-variants';

export const groupVariants = tv({
  extend: focusRingVariants,
  base: 'group flex items-center h-9 box-border bg-white dark:bg-neutral-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden transition',
  variants: fieldBorderVariants.variants,
});
