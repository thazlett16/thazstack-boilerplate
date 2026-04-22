import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';

export const textFieldVariants = tv({
  slots: {
    root: [
      'group/text-field',

      'relative inline-flex flex-col',

      'm-0 min-w-0 border-0 p-0',

      'gap-1',
    ],
    inputLabelContainer: [''],
    label: [''],
    input: [''],
    textArea: [''],
    description: [''],
    fieldError: [''],
  },
});

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
export type SlotsTextFieldVariants = ReturnType<typeof textFieldVariants>;
export type RequiredTextFieldVariants = Required<SetNonNullable<TextFieldVariants>>;
