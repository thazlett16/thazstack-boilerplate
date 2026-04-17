import type { TextFieldProps as RACTextFieldProps } from 'react-aria-components';
import { composeRenderProps, TextField as RACTextField } from 'react-aria-components';

import type { TextFieldVariants } from '../variants';
import { textFieldVariants } from '../variants';

export type TextFieldRootProps = RACTextFieldProps & TextFieldVariants;

export function TextFieldRoot(props: TextFieldRootProps) {
  const slots = textFieldVariants();

  return (
    <RACTextField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    />
  );
}
