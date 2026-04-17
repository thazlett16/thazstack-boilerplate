import { tv } from 'tailwind-variants';

export const fieldErrorVariants = tv({
  slots: {
    root: ['group/field-error', 'text-xs text-danger'],
  },
});

export type FieldErrorVariants = ReturnType<typeof fieldErrorVariants>;
// export type SlotsFieldErrorMessageVariants = ReturnType<typeof fieldErrorMessageVariants>;
// export type RequiredFieldErrorMessageVariants = Required<SetNonNullable<FieldErrorMessageVariants>>;
