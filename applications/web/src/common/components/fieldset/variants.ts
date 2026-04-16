import { tv } from 'tailwind-variants';

export const fieldsetVariants = tv({
  slots: {
    root: [
      'flex flex-col gap-4',
      'data-disabled:opacity-50',
      'data-invalid:border data-invalid:border-danger data-invalid:rounded-lg data-invalid:p-4',
    ],
  },
});

export type FieldsetVariants = ReturnType<typeof fieldsetVariants>;
