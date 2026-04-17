import type { InputProps as RACInputProps } from 'react-aria-components';

import { composeRenderProps, Input as RACInput } from 'react-aria-components';

import type { InputVariants } from '../variants';

import { inputVariants } from '../variants';

export type InputRootProps = RACInputProps & InputVariants;

export function InputRoot(props: InputRootProps) {
  return (
    <RACInput
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return inputVariants({ ...renderProps, className });
      })}
    />
  );
}
