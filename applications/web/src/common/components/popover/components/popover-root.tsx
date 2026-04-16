import type { PopoverProps as RACPopoverProps } from 'react-aria-components';

import { composeRenderProps, Popover as RACPopover } from 'react-aria-components';

import { popoverVariants } from '#src/common/components/popover/variants';

export interface PopoverRootProps extends RACPopoverProps {}

const slots = popoverVariants();

export function PopoverRoot(props: PopoverRootProps) {
  return (
    <RACPopover
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return slots.root({ className });
      })}
    />
  );
}
