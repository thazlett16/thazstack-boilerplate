import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  base: [
    'group/input',
    // 'data-hovered:',
    // 'data-focused:',
    // 'data-focus-visible:',
    // 'data-disabled:',
    // 'data-invalid:',
    // 'data-readonly:',
    // 'data-required:',
  ],
});

// export type InputVariants = VariantProps<typeof inputVariants>;
// export type SlotsInputVariants = ReturnType<typeof inputVariants>;
// export type RequiredInputVariants = Required<SetNonNullable<InputVariants>>;
