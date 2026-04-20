import type { TextFieldProps as RACTextFieldProps } from 'react-aria-components';
import { composeRenderProps, TextField as RACTextField } from 'react-aria-components';

import type { TextFieldVariants } from '../variants';
import { textFieldVariants } from '../variants';

export type TextFieldProps = RACTextFieldProps & TextFieldVariants;

export function TextField(props: TextFieldProps) {
  return (
    <RACTextField
      data-slot="text-field"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return textFieldVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
