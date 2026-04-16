import { tv } from 'tailwind-variants';

export const descriptionVariants = tv({
  slots: {
    root: ['text-xs text-muted-foreground'],
  },
});

export type DescriptionVariants = ReturnType<typeof descriptionVariants>;
