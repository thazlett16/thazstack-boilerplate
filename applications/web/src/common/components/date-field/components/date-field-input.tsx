import type { ReactNode } from 'react';
import type { DateInputProps as RACDateInputProps } from 'react-aria-components';

import { composeRenderProps, DateInput as RACDateInput } from 'react-aria-components';

import { useDateFieldContext } from '#src/common/components/date-field/context';

import { DateFieldSegment } from './date-field-segment';

export interface DateFieldInputProps extends Omit<RACDateInputProps, 'children'> {
  children?: ReactNode | ((segment: Parameters<NonNullable<RACDateInputProps['children']>>[0]) => ReactNode);
}

export function DateFieldInput({ children, ...props }: DateFieldInputProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateFieldInput must be used within a DateFieldContextProvider');
  }

  const { slots } = context;

  const renderChildren = children ?? ((segment) => <DateFieldSegment segment={segment} />);

  return (
    <RACDateInput
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.input({ ...renderProps, className });
      })}
    >
      {renderChildren as RACDateInputProps['children']}
    </RACDateInput>
  );
}
