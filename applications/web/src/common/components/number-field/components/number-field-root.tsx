import type { ReactNode } from 'react';
import type { NumberFieldProps as RACNumberFieldProps } from 'react-aria-components';

import {
  composeRenderProps,
  Button as RACButton,
  Group as RACGroup,
  Input as RACInput,
  NumberField as RACNumberField,
} from 'react-aria-components';

import { Description } from '#src/common/components/description';
import { FieldError } from '#src/common/components/field-error';
import { Label } from '#src/common/components/label';
import { numberFieldVariants } from '#src/common/components/number-field/variants';

export interface NumberFieldRootProps extends RACNumberFieldProps {
  label?: ReactNode;
  description?: ReactNode;
}

export function NumberFieldRoot({ label, description, ...props }: NumberFieldRootProps) {
  const slots = numberFieldVariants();

  return (
    <RACNumberField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    >
      {label && <Label>{label}</Label>}
      <RACGroup className={(renderProps) => slots.group({ ...renderProps })}>
        <RACButton
          slot="decrement"
          className={(renderProps) => slots.stepperButton({ ...renderProps })}
        >
          &minus;
        </RACButton>
        <RACInput className={slots.input()} />
        <RACButton
          slot="increment"
          className={(renderProps) => slots.stepperButton({ ...renderProps })}
        >
          +
        </RACButton>
      </RACGroup>
      {description && <Description>{description}</Description>}
      <FieldError />
    </RACNumberField>
  );
}
