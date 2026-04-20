import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  base: [
    'group/label',

    '',
    '',
    '',

    // 'block absolute top-0 left-0',
    // 'text-sm font-medium text-foreground',
    // 'data-disabled:',
    // 'data-invalid:',
    // 'data-readonly:',
    // 'data-required:',
  ],
});

// export type LabelVariants = VariantProps<typeof labelVariants>;
// export type SlotsLabelVariants = ReturnType<typeof labelVariants>;
// export type RequiredLabelVariants = Required<SetNonNullable<LabelVariants>>;
