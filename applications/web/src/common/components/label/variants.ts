import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  base: [
    'group/label',
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
