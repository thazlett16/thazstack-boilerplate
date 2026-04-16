import type { ReactNode } from 'react';
import type { TextFieldProps as RACTextFieldProps } from 'react-aria-components';

import { composeRenderProps, TextField as RACTextField } from 'react-aria-components';

import { Description } from '#src/common/components/description';
import { FieldError } from '#src/common/components/field-error';
import { Input } from '#src/common/components/input';
import { Label } from '#src/common/components/label';
import { textFieldVariants } from '#src/common/components/text-field/variants';

export interface TextFieldRootProps extends RACTextFieldProps {
  label?: ReactNode;
  description?: ReactNode;
  placeholder?: string;
}

export function TextFieldRoot({ label, description, placeholder, ...props }: TextFieldRootProps) {
  const slots = textFieldVariants();

  return (
    <RACTextField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    >
      {label && <Label>{label}</Label>}
      {placeholder !== undefined ? <Input placeholder={placeholder} /> : <Input />}
      {description && <Description>{description}</Description>}
      <FieldError />
    </RACTextField>
  );
}
