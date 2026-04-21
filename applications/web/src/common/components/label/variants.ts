import { tv } from 'tailwind-variants';

export const labelVariants = tv({
  base: [
    'absolute left-3 z-10',
    'top-1/2 -translate-y-1/2',
    'text-sm leading-none font-medium',
    'text-muted-foreground',
    'pointer-events-none select-none',
    'transition-all duration-150',

    // required indicator
    'group-data-[required="true"]/text-field:after:content-["*"]',
    'group-data-[required="true"]/text-field:after:ml-0.5',

    // hover
    'group-hover/field-label-input-container:text-primary-hover',
    'group-data-[invalid="true"]/text-field:group-hover/field-label-input-container:text-danger-hover',

    // textarea: always sit near top (never vertically centered in a tall box)
    'group-has-[textarea]/field-label-input-container:top-1.5',
    'group-has-[textarea]/field-label-input-container:translate-y-0',
    'group-has-[textarea]/field-label-input-container:text-xs',

    // input focused → float up
    'group-has-[input:focus]/field-label-input-container:top-1.5',
    'group-has-[input:focus]/field-label-input-container:translate-y-0',
    'group-has-[input:focus]/field-label-input-container:text-xs',
    'group-has-[input:focus]/field-label-input-container:text-primary',

    // textarea focused → highlight color (already at top)
    'group-has-[textarea:focus]/field-label-input-container:text-primary',

    // error + focused → error color wins
    'group-data-[invalid="true"]/text-field:group-has-[input:focus]/field-label-input-container:text-danger',
    'group-data-[invalid="true"]/text-field:group-has-[textarea:focus]/field-label-input-container:text-danger',

    // input has value → float up
    'group-has-[input:not(:placeholder-shown)]/field-label-input-container:top-1.5',
    'group-has-[input:not(:placeholder-shown)]/field-label-input-container:translate-y-0',
    'group-has-[input:not(:placeholder-shown)]/field-label-input-container:text-xs',

    // textarea has value → stay at top (already there, but ensure text-xs)
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
