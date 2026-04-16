import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  slots: {
    root: [
      'text-sm font-medium text-foreground',
      'data-required:after:content-["*"] data-required:after:ml-0.5 data-required:after:text-danger',
      'data-invalid:text-danger',
    ],
  },
});

export type LabelVariants = ReturnType<typeof labelVariants>;
