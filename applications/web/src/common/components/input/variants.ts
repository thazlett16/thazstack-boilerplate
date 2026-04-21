import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  base: [
    'w-full',
    'px-3 pt-5 pb-1.5',
    'leading-none',
    'bg-transparent',
    'text-sm text-foreground',
    'border-0 outline-none',
    'placeholder:text-muted-foreground/50',
    'placeholder:opacity-0',
    'placeholder:transition-opacity placeholder:duration-150',
    'group-focus-within/field-label-input-container:placeholder:opacity-100',
    'data-[disabled="true"]:cursor-not-allowed',
    'data-[disabled="true"]:text-muted-foreground',
    'data-[readonly="true"]:cursor-default',
  ],
});

// export type InputVariants = VariantProps<typeof inputVariants>;
// export type SlotsInputVariants = ReturnType<typeof inputVariants>;
// export type RequiredInputVariants = Required<SetNonNullable<InputVariants>>;
