import { tv } from 'tailwind-variants';

export const textFieldVariants = tv({
  base: [
    'group/text-field',
    'inline-flex flex-col relative',
    'min-w-0 p-0 m-0 border-0',

    '',
    '',
    '',

    // TODO : Map invalid states. Mark certain child slots as hidden when invalid
  ],
  variants: {
    fullWidth: {
      true: 'w-full *:data-[slot="input"]:w-full *:data-[slot="textarea"]:w-full',
    },
  },
});

// export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
// export type SlotsTextFieldVariants = ReturnType<typeof textFieldVariants>;
// export type RequiredTextFieldVariants = Required<SetNonNullable<TextFieldVariants>>;
