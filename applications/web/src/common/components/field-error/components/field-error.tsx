import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';

import { fieldErrorVariants } from '../variants';

export type FieldErrorProps = RACFieldErrorProps;

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      data-slot="field-error"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return fieldErrorVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
