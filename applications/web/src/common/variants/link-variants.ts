import { tv } from 'tailwind-variants';

import { focusRingVariants } from '#src/common/variants/focus-ring-variants';

export const linkVariants = tv({
  extend: focusRingVariants,
  base: 'underline disabled:no-underline disabled:cursor-default forced-colors:disabled:text-[GrayText] transition rounded-xs [-webkit-tap-highlight-color:transparent]',
  variants: {
    variant: {
      primary:
        'text-blue-600 dark:text-blue-500 underline decoration-blue-600/60 hover:decoration-blue-600 dark:decoration-blue-500/60 dark:hover:decoration-blue-500',
      secondary:
        'text-neutral-700 dark:text-neutral-300 underline decoration-neutral-700/50 hover:decoration-neutral-700 dark:decoration-neutral-300/70 dark:hover:decoration-neutral-300',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
