import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const textFieldVariants = tv({
  slots: {
    root: [
      'group/text-field',
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

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
// export type SlotsTextFieldVariants = ReturnType<typeof textFieldVariants>;
// export type RequiredTextFieldVariants = Required<SetNonNullable<TextFieldVariants>>;
