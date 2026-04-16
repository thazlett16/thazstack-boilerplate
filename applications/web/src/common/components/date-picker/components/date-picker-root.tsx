import type { ReactNode } from 'react';
import type { DatePickerProps as RACDatePickerProps, DateValue } from 'react-aria-components';

import {
  Button as RACButton,
  composeRenderProps,
  DateInput,
  DatePicker as RACDatePicker,
  DateSegment,
  Dialog,
  Group as RACGroup,
  Popover as RACPopover,
} from 'react-aria-components';

import { Calendar } from '#src/common/components/calendar';
import { datePickerVariants } from '#src/common/components/date-picker/variants';
import { Description } from '#src/common/components/description';
import { FieldError } from '#src/common/components/field-error';
import { Label } from '#src/common/components/label';

export interface DatePickerRootProps<T extends DateValue> extends RACDatePickerProps<T> {
  label?: ReactNode;
  description?: ReactNode;
}

export function DatePickerRoot<T extends DateValue>({ label, description, ...props }: DatePickerRootProps<T>) {
  const slots = datePickerVariants();

  return (
    <RACDatePicker
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        slots.root({ ...renderProps, className }),
      )}
    >
      {label && <Label>{label}</Label>}

      <RACGroup className={(renderProps) => slots.group({ ...renderProps })}>
        <DateInput className={slots.input()}>{(segment) => <DateSegment segment={segment} />}</DateInput>

        {/* Calendar trigger */}
        <RACButton className={(renderProps) => slots.trigger({ ...renderProps })}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            aria-hidden
          >
            <rect
              x="2"
              y="3"
              width="12"
              height="11"
              rx="1.5"
            />
            <path d="M5 1v4M11 1v4M2 7h12" />
          </svg>
        </RACButton>
      </RACGroup>

      {description && <Description>{description}</Description>}
      <FieldError />

      <RACPopover className={slots.popover()}>
        <Dialog>
          <Calendar />
        </Dialog>
      </RACPopover>
    </RACDatePicker>
  );
}
