import type { NumberFieldProps as RACNumberFieldProps } from 'react-aria-components';
import { composeRenderProps, NumberField as RACNumberField } from 'react-aria-components';

import { numberFieldVariants } from '../variants';

export type NumberFieldProps = RACNumberFieldProps;

export function NumberField(props: NumberFieldProps) {
  return (
    <RACNumberField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return numberFieldVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
