import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

export const textFieldVariants = tv({
  base: [
    'group/text-field',

    'relative inline-flex flex-col',

    'm-0 min-w-0 border-0 p-0',

    'gap-1',
  ],
  variants: {
    fullWidth: {
      true: 'w-full *:data-[slot="input"]:w-full *:data-[slot="textarea"]:w-full',
    },
  },
});

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
// export type SlotsTextFieldVariants = ReturnType<typeof textFieldVariants>;
// export type RequiredTextFieldVariants = Required<SetNonNullable<TextFieldVariants>>;
