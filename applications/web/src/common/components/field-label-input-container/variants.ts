import { tv } from 'tailwind-variants';

export const fieldLabelInputContainerVariants = tv({
  base: [
    'group/field-label-input-container',
    'relative',
    'px-3 py-2.5',
    'rounded-md',
    'border border-surface-tertiary',
    'bg-surface-default',
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

// export type FieldLabelInputContainerVariants = ReturnType<typeof fieldLabelInputContainerVariants>;
// export type SlotsFieldLabelInputContainerMessageVariants = ReturnType<typeof fieldLabelInputContainerVariants>;
// export type RequiredFieldLabelInputContainerMessageVariants = Required<SetNonNullable<FieldLabelInputContainerMessageVariants>>;
