import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

export const calendarVariants = tv({
  slots: {
    root: 'w-fit',
    header: 'flex items-center justify-between mb-3',
    title: 'text-sm font-medium',
    navButton: [
      'inline-flex items-center justify-center w-7 h-7 rounded-lg text-muted-foreground outline-none transition-colors',
      'data-hovered:bg-muted',
      'data-pressed:bg-muted-hover',
      'data-focus-visible:ring-2 data-focus-visible:ring-primary',
    ],
    grid: 'w-full border-collapse',
    headerCell: 'text-xs text-muted-foreground font-normal pb-2 text-center w-8',
    cell: 'text-center p-0',
    cellButton: [
      'w-8 h-8 text-sm rounded-lg outline-none mx-auto flex items-center justify-center transition-colors',
      'data-hovered:bg-muted',
      'data-pressed:bg-muted-hover',
      'data-selected:bg-primary data-selected:text-primary-foreground',
      'data-focus-visible:ring-2 data-focus-visible:ring-primary',
      'data-disabled:opacity-30 data-disabled:cursor-not-allowed',
      'data-outside-month:text-muted-foreground data-outside-month:opacity-50',
      'data-today:font-semibold',
      'data-unavailable:line-through data-unavailable:text-muted-foreground',
    ],
  },
});

export type CalendarVariants = VariantProps<typeof calendarVariants>;
