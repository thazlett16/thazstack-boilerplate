import type { InputProps as RACInputProps, InputRenderProps } from 'react-aria-components';

import { Input as RACInput } from 'react-aria-components';

import { inputVariants } from '../variants';

export type InputRootProps = RACInputProps;

export function InputRoot({ className: _className, ...props }: InputRootProps) {
  const { root } = inputVariants();
  return (
    <RACInput
      {...props}
      className={(renderProps: InputRenderProps) => {
        const resolvedClassName =
          typeof _className === 'function' ? _className({ ...renderProps, defaultClassName: undefined }) : _className;
        return root({ ...renderProps, className: resolvedClassName });
      }}
    />
  );
}
