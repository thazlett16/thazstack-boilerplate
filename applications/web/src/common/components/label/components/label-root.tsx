import type { LabelProps as RACLabelProps } from 'react-aria-components';

import { Label as RACLabel } from 'react-aria-components';

import { labelVariants } from '../variants';

export type LabelRootProps = RACLabelProps;

export function LabelRoot({ className, ...props }: LabelRootProps) {
  const { root } = labelVariants();
  return (
    <RACLabel
      {...props}
      className={root({ className })}
    />
  );
}
