import { tv } from 'tailwind-variants';

export const descriptionVariants = tv({
  base: [
    'group/description',

    'text-xs text-muted-foreground',

    'group-data-[invalid="true"]/text-field:hidden',
  ],
});

// export type DescriptionVariants = ReturnType<typeof descriptionVariants>;
// export type SlotsDescriptionVariants = ReturnType<typeof descriptionVariants>;
// export type RequiredDescriptionVariants = Required<SetNonNullable<DescriptionVariants>>;
