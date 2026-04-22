import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const descriptionVariants = tv({
  base: [
    'group/description',

    'text-muted-foreground text-xs',

    'group-data-[invalid="true"]/text-field:hidden',
    'group-data-[invalid="true"]/number-field:hidden',
  ],
});

export type DescriptionVariants = VariantProps<typeof descriptionVariants>;
// export type SlotsDescriptionVariants = ReturnType<typeof descriptionVariants>;
// export type RequiredDescriptionVariants = Required<SetNonNullable<DescriptionVariants>>;
