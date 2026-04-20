import type { ComponentPropsWithRef, ReactNode } from 'react';

import { fieldLabelInputContainerVariants } from '../variants';

export interface FieldLabelInputContainerProps extends ComponentPropsWithRef<'div'> {
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
