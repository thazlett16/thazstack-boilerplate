import type { DateFieldProps as RACDateFieldProps } from 'react-aria-components';
import type { DateValue } from 'react-aria-components';

import { composeRenderProps, DateField as RACDateField } from 'react-aria-components';

import { useDateFieldContext } from '#src/common/components/date-field/context';

import { DateFieldContextProvider } from './date-field-context-provider';

export interface DateFieldRootProps<T extends DateValue> extends RACDateFieldProps<T> {}

export function DateFieldRoot<T extends DateValue>(props: DateFieldRootProps<T>) {
  return (
    <DateFieldContextProvider>
      <DateFieldRootInner {...props} />
    </DateFieldContextProvider>
  );
}

function DateFieldRootInner<T extends DateValue>(props: DateFieldRootProps<T>) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateFieldRoot must be used within a DateFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACDateField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    />
  );
}
