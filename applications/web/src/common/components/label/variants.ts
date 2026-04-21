import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  base: [
    'group/label',
    'absolute left-3 z-10',
    'top-1/2 -translate-y-1/2',
    'px-1',
    'bg-[linear-gradient(to_bottom,var(--layer-bg)_50%,var(--field-bg)_50%)]',
    'text-sm font-medium leading-none',
    'text-muted-foreground',
    'select-none',
    'transition-all duration-150',

    // required indicator
    'group-data-[required="true"]/text-field:after:content-["*"]',
    'group-data-[required="true"]/text-field:after:ml-0.5',

    // hover
    'group-hover/field-label-input-container:text-primary-hover',
    'group-data-[invalid="true"]/text-field:group-hover/field-label-input-container:text-danger-hover',

    // textarea: override vertical centering → sit at first line
    'group-has-[textarea]/field-label-input-container:top-3',
    'group-has-[textarea]/field-label-input-container:translate-y-0',

    // input focused → notched
    'group-has-[input:focus]/field-label-input-container:top-0',
    'group-has-[input:focus]/field-label-input-container:-translate-y-1/2',
    'group-has-[input:focus]/field-label-input-container:text-xs',
    'group-has-[input:focus]/field-label-input-container:text-primary',

    // textarea focused → notched
    'group-has-[textarea:focus]/field-label-input-container:top-0',
    'group-has-[textarea:focus]/field-label-input-container:-translate-y-1/2',
    'group-has-[textarea:focus]/field-label-input-container:text-xs',
    'group-has-[textarea:focus]/field-label-input-container:text-primary',

    // invalid + focused → error color wins
    'group-data-[invalid="true"]/text-field:group-has-[input:focus]/field-label-input-container:text-danger',
    'group-data-[invalid="true"]/text-field:group-has-[textarea:focus]/field-label-input-container:text-danger',

    // input has value → notched
    'group-has-[input:not(:placeholder-shown)]/field-label-input-container:top-0',
    'group-has-[input:not(:placeholder-shown)]/field-label-input-container:-translate-y-1/2',
    'group-has-[input:not(:placeholder-shown)]/field-label-input-container:text-xs',

    // textarea has value → notched
    'group-has-[textarea:not(:placeholder-shown)]/field-label-input-container:top-0',
    'group-has-[textarea:not(:placeholder-shown)]/field-label-input-container:-translate-y-1/2',
    'group-has-[textarea:not(:placeholder-shown)]/field-label-input-container:text-xs',

    // invalid
    'group-data-[invalid="true"]/text-field:text-danger',

    // disabled
    'group-data-[disabled="true"]/text-field:cursor-not-allowed',
  ],
});

// export type LabelVariants = VariantProps<typeof labelVariants>;
// export type SlotsLabelVariants = ReturnType<typeof labelVariants>;
// export type RequiredLabelVariants = Required<SetNonNullable<LabelVariants>>;
