import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  slots: {
    root: [
      'text-sm font-medium text-foreground',
      // 'data-disabled:',
      // 'data-invalid:',
      // 'data-readonly:',
      // 'data-required:',
    ],
  },
  defaultVariants: {
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  variants: {
    isDisabled: {
      true: {
        root: '',
      },
    },
    isInvalid: {
      true: {
        root: '',
      },
    },
    isReadOnly: {
      true: {
        root: '',
      },
    },
    isRequired: {
      true: {
        root: '',
      },
    },
  },
});

export type LabelVariants = VariantProps<typeof labelVariants>;
// export type SlotsLabelVariants = ReturnType<typeof labelVariants>;
// export type RequiredLabelVariants = Required<SetNonNullable<LabelVariants>>;
