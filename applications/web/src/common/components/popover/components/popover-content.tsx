import type { ComponentPropsWithRef, ReactNode } from 'react';

import { popoverVariants } from '#src/common/components/popover/variants';

export interface PopoverContentProps extends ComponentPropsWithRef<'div'> {
  children?: ReactNode;
}

const slots = popoverVariants();

export function PopoverContent(props: PopoverContentProps) {
  return (
    <div
      {...props}
      className={slots.content({ className: props.className })}
      data-slot="popover-content"
    />
  );
}
