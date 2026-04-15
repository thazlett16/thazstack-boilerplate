import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const cardVariants = tv({
  defaultVariants: {
    variant: 'default',
  },
  slots: {
    root: 'group/card flex flex-col gap-2 overflow-hidden p-4',
    header: 'group/card-header',
    title: 'group/card-title',
    description: 'group/card-description',
    content: 'group/card-content',
    footer: 'group/card-footer',
  },
  variants: {
    variant: {
      transparent: '',
      default: '',
      secondary: '',
      tertiary: '',
    },
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
