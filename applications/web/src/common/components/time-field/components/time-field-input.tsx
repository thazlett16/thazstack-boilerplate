import type { ReactNode } from 'react';
import type { DateInputProps as RACDateInputProps } from 'react-aria-components';

import { useMemo } from 'react';
import { composeRenderProps, DateInput as RACDateInput, DateSegment as RACDateSegment } from 'react-aria-components';
// composeRenderProps used for the input className below

import { dateFieldVariants } from '#src/common/components/date-field/variants';
import { useTimeFieldContext } from '#src/common/components/time-field/context';

export interface TimeFieldInputProps extends Omit<RACDateInputProps, 'children'> {
  children?: ReactNode | ((segment: Parameters<NonNullable<RACDateInputProps['children']>>[0]) => ReactNode);
}

export function TimeFieldInput({ children, ...props }: TimeFieldInputProps) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeFieldInput must be used within a TimeFieldContextProvider');
  }

  const { slots } = context;
  const dateFieldSlots = useMemo(() => dateFieldVariants(), []);

  const renderChildren =
    children ??
    ((segment) => (
      <RACDateSegment
        segment={segment}
        className={(renderProps) => dateFieldSlots.segment({ ...renderProps })}
      />
    ));

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
