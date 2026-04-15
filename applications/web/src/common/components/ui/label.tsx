import type { LabelProps as RACLabelProps } from 'react-aria-components';

import { Label as RACLabel } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        'font-sans text-sm text-neutral-600 dark:text-neutral-300 font-medium cursor-default w-fit',
        props.className,
      )}
    />
  );
}
