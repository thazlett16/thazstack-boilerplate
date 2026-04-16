import type { DateSegmentProps as RACDateSegmentProps } from 'react-aria-components';

import { composeRenderProps, DateSegment as RACDateSegment } from 'react-aria-components';

import { useDateFieldContext } from '#src/common/components/date-field/context';

export interface DateFieldSegmentProps extends RACDateSegmentProps {}

export function DateFieldSegment(props: DateFieldSegmentProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateFieldSegment must be used within a DateFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACDateSegment
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.segment({ ...renderProps, className });
      })}
    />
  );
}
