import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const textAreaVariants = tv({
  slots: {
    root: [
      'group/text-area',
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

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;
// export type SlotsTextAreaVariants = ReturnType<typeof textAreaVariants>;
// export type RequiredTextAreaVariants = Required<SetNonNullable<TextAreaVariants>>;
