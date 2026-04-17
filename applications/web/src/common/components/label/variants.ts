import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  base: [
    'text-sm font-medium text-foreground',
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

export type LabelVariants = VariantProps<typeof labelVariants>;
