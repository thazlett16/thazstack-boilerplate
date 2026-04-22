import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const descriptionVariants = tv({
  base: [
    'group/description',

    'text-muted-foreground text-xs',
  ],
});

export type DescriptionVariants = VariantProps<typeof descriptionVariants>;
// export type SlotsDescriptionVariants = ReturnType<typeof descriptionVariants>;
// export type RequiredDescriptionVariants = Required<SetNonNullable<DescriptionVariants>>;
