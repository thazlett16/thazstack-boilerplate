import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { FieldLabelInputContainerVariants } from '../variants';
import { fieldLabelInputContainerVariants } from '../variants';

export interface FieldLabelInputContainerProps extends ComponentPropsWithRef<'div'>, FieldLabelInputContainerVariants {
  children: ReactNode;
}

export function FieldLabelInputContainer(props: FieldLabelInputContainerProps) {
  return (
    <div
      {...props}
      data-slot="field-input-label-container"
      className={fieldLabelInputContainerVariants({ className: props.className })}
    />
  );
}
