import { tv } from 'tailwind-variants';

export const fieldErrorVariants = tv({
  base: [
    'group/field-error',

    'text-xs text-danger',

    'hidden',
    'group-data-[invalid="true"]/text-field:block',
  ],
});

// export type FieldErrorVariants = ReturnType<typeof fieldErrorVariants>;
// export type SlotsFieldErrorMessageVariants = ReturnType<typeof fieldErrorMessageVariants>;
// export type RequiredFieldErrorMessageVariants = Required<SetNonNullable<FieldErrorMessageVariants>>;
