import type { TimeFieldProps as RACTimeFieldProps } from 'react-aria-components';
import type { TimeValue } from 'react-aria-components';

import { composeRenderProps, TimeField as RACTimeField } from 'react-aria-components';

import { useTimeFieldContext } from '#src/common/components/time-field/context';

import { TimeFieldContextProvider } from './time-field-context-provider';

export interface TimeFieldRootProps<T extends TimeValue> extends RACTimeFieldProps<T> {}

export function TimeFieldRoot<T extends TimeValue>(props: TimeFieldRootProps<T>) {
  return (
    <TimeFieldContextProvider>
      <TimeFieldRootInner {...props} />
    </TimeFieldContextProvider>
  );
}

function TimeFieldRootInner<T extends TimeValue>(props: TimeFieldRootProps<T>) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeFieldRoot must be used within a TimeFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACTimeField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    />
  );
}
