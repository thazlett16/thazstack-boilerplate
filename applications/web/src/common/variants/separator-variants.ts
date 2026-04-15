import { tv } from 'tailwind-variants';

export const separatorVariants = tv({
  base: 'bg-neutral-300 dark:bg-neutral-600 forced-colors:bg-[ButtonBorder] border-none',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'w-px min-h-8 h-full',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
