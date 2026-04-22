import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const labelInputContainerVariants = tv({
  base: [
    'group/label-input-container',
    'relative flex items-stretch',
    'bg-[var(--field)]',
    'rounded-md',
    'border border-surface-tertiary',
    'transition-colors duration-150',
    'hover:border-primary-hover',
    'focus-within:border-primary',
    'group-data-[invalid="true"]/text-field:border-danger',
    'group-data-[invalid="true"]/text-field:hover:border-danger-hover',
    'group-data-[invalid="true"]/text-field:focus-within:border-danger',
    'group-data-[disabled="true"]/text-field:opacity-50',
    'group-data-[disabled="true"]/text-field:cursor-not-allowed',
  ],
});

export type LabelInputContainerVariants = VariantProps<typeof labelInputContainerVariants>;
// export type SlotsLabelInputContainerMessageVariants = ReturnType<typeof LabelInputContainerVariants>;
// export type RequiredLabelInputContainerMessageVariants = Required<SetNonNullable<LabelInputContainerMessageVariants>>;
