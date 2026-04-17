import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  base: [
    // 'data-hovered:',
    // 'data-focused:',
    // 'data-focus-visible:',
    // 'data-disabled:',
    // 'data-invalid:',
    // 'data-readonly:',
    // 'data-required:',
  ],
  defaultVariants: {
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  variants: {
    isDisabled: {
      true: '',
    },
    isInvalid: {
      true: '',
    },
    isReadOnly: {
      true: '',
    },
    isRequired: {
      true: '',
    },
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
