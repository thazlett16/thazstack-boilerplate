import type { TextFieldProps as RACTextFieldProps, ValidationResult } from 'react-aria-components';

import { TextField as RACTextField, composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

import { Description } from '#src/common/components/ui/description';
import { FieldError } from '#src/common/components/ui/field-error';
import { Input } from '#src/common/components/ui/input';
import { Label } from '#src/common/components/ui/label';
import { inputVariants } from '#src/common/variants/input-variants';

export interface TextFieldProps extends RACTextFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField(props: TextFieldProps) {
  const { label, description, errorMessage } = props;

  return (
    <RACTextField
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge('flex flex-col gap-1 font-sans', className);
      })}
    >
      {label && <Label>{label}</Label>}
      <Input className={inputVariants} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}
