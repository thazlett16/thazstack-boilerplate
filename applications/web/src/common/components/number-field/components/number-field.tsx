import type { NumberFieldProps as RACNumberFieldProps } from 'react-aria-components';
import { composeRenderProps, NumberField as RACNumberField } from 'react-aria-components';

import type { NumberFieldVariants } from '../variants';
import { numberFieldVariants } from '../variants';

export type NumberFieldProps = RACNumberFieldProps & NumberFieldVariants;

export function NumberField(props: NumberFieldProps) {
  return (
    <RACNumberField
      data-slot="number-field"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return numberFieldVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
