import { tv } from 'tailwind-variants';

export const tooltipVariants = tv({
  base: 'group bg-neutral-700 dark:bg-neutral-600 border border-neutral-800 dark:border-white/10 font-sans text-xs text-white rounded-lg drop-shadow-lg will-change-transform px-3 py-1.5 box-border',
  variants: {
    isEntering: {
      true: 'animate-in fade-in placement-bottom:slide-in-from-top-0.5 placement-top:slide-in-from-bottom-0.5 placement-left:slide-in-from-right-0.5 placement-right:slide-in-from-left-0.5 ease-out duration-200',
    },
    isExiting: {
      true: 'animate-out fade-out placement-bottom:slide-out-to-top-0.5 placement-top:slide-out-to-bottom-0.5 placement-left:slide-out-to-right-0.5 placement-right:slide-out-to-left-0.5 ease-in duration-150',
    },
  },
});
