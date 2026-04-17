import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  slots: {
    root: [
      // 'data-hovered:',
      // 'data-focused:',
      // 'data-focus-visible:',
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

export type InputVariants = VariantProps<typeof inputVariants>;
// export type SlotsInputVariants = ReturnType<typeof inputVariants>;
// export type RequiredInputVariants = Required<SetNonNullable<InputVariants>>;
