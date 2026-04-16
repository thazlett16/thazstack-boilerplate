import type { FieldErrorProps as RACFieldErrorProps, FieldErrorRenderProps } from 'react-aria-components';

import { FieldError as RACFieldError } from 'react-aria-components';

import { fieldErrorVariants } from '../variants';

export type FieldErrorRootProps = RACFieldErrorProps;

export function FieldErrorRoot({ className: _className, ...props }: FieldErrorRootProps) {
  const { root } = fieldErrorVariants();
  return (
    <RACFieldError
      {...props}
      className={(renderProps: FieldErrorRenderProps) => {
        const resolvedClassName =
          typeof _className === 'function' ? _className({ ...renderProps, defaultClassName: undefined }) : _className;
        return root({ ...renderProps, className: resolvedClassName });
      }}
    />
  );
}
