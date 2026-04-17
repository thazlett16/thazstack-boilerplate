import type { LabelProps as RACLabelProps } from 'react-aria-components';

import { Label as RACLabel } from 'react-aria-components';

import type { LabelVariants } from '../variants';

import { labelVariants } from '../variants';

export type LabelRootProps = RACLabelProps & LabelVariants;

export function LabelRoot(props: LabelRootProps) {
  return (
    <RACLabel
      {...props}
      className={labelVariants({ ...props })}
    />
  );
}
