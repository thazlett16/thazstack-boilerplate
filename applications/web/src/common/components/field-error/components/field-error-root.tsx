import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';

import { fieldErrorVariants } from '../variants';

export type FieldErrorRootProps = RACFieldErrorProps;

export function FieldErrorRoot(props: FieldErrorRootProps) {
  const slots = fieldErrorVariants();

  return (
    <RACFieldError
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    />
  );
}
