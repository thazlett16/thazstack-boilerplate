import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';

import type { LabelVariants } from '../variants';
import { labelVariants } from '../variants';

export type LabelRootProps = RACLabelProps & LabelVariants;

export function LabelRoot(props: LabelRootProps) {
  const slots = labelVariants({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
  });

  return (
    <RACLabel
      {...props}
      className={slots.root({ className: props.className })}
    />
  );
}
