import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components';

import { FieldError as RACFieldError, composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export type FieldErrorProps = RACFieldErrorProps;

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge('text-sm text-red-600 forced-colors:text-[Mark]', className);
      })}
    />
  );
}
