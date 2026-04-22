import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { LabelInputContainerVariants } from '../variants';
import { labelInputContainerVariants } from '../variants';

export interface LabelInputContainerProps extends ComponentPropsWithRef<'div'>, LabelInputContainerVariants {
  children: ReactNode;
}

export function LabelInputContainer(props: LabelInputContainerProps) {
  return (
    <div
      {...props}
      data-slot="label-input-container"
      className={labelInputContainerVariants({ className: props.className })}
    />
  );
}
