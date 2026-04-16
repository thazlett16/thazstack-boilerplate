import { tv } from 'tailwind-variants';

export const fieldErrorVariants = tv({
  slots: {
    root: ['text-xs text-danger'],
  },
});

export type FieldErrorVariants = ReturnType<typeof fieldErrorVariants>;
