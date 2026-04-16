import { PopoverContent } from './components/popover-content';
import { PopoverRoot } from './components/popover-root';

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Content: PopoverContent,
});

export type { PopoverContentProps } from './components/popover-content';
export type { PopoverRootProps } from './components/popover-root';

export type { PopoverVariants } from './variants';
export { popoverVariants } from './variants';
