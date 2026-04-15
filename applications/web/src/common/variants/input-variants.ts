import { tv } from 'tailwind-variants';

import { fieldBorderVariants } from '#src/common/variants/field-border-variants';
import { focusRingVariants } from '#src/common/variants/focus-ring-variants';

export const inputVariants = tv({
  extend: focusRingVariants,
  base: 'border-1 rounded-lg min-h-9 font-sans text-sm py-0 px-3 box-border transition',
  variants: {
    isFocused: fieldBorderVariants.variants.isFocusWithin,
    isInvalid: fieldBorderVariants.variants.isInvalid,
    isDisabled: fieldBorderVariants.variants.isDisabled,
  },
});
