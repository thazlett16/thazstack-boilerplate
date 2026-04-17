import { tv } from 'tailwind-variants';

export const descriptionVariants = tv({
  slots: {
    root: ['group/description', 'text-xs text-muted-foreground'],
  },
});

export type DescriptionVariants = ReturnType<typeof descriptionVariants>;
// export type SlotsDescriptionVariants = ReturnType<typeof descriptionVariants>;
// export type RequiredDescriptionVariants = Required<SetNonNullable<DescriptionVariants>>;
