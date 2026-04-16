import type { CalendarProps as RACCalendarProps } from 'react-aria-components';
import type { DateValue } from 'react-aria-components';

import { useMemo } from 'react';
import {
  Button as RACButton,
  Calendar as RACCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  composeRenderProps,
  Heading,
} from 'react-aria-components';

import { calendarVariants } from '#src/common/components/calendar/variants';

export interface CalendarRootProps<T extends DateValue> extends RACCalendarProps<T> {}

export function CalendarRoot<T extends DateValue>(props: CalendarRootProps<T>) {
  const slots = useMemo(() => calendarVariants(), []);

  return (
    <RACCalendar
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    >
      <header className={slots.header()}>
        <RACButton
          slot="previous"
          className={slots.navButton()}
        >
          ‹
        </RACButton>
        <Heading className={slots.title()} />
        <RACButton
          slot="next"
          className={slots.navButton()}
        >
          ›
        </RACButton>
      </header>
      <CalendarGrid className={slots.grid()}>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell className={slots.headerCell()}>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={slots.cell()}
            >
              {({
                formattedDate,
                isHovered,
                isPressed,
                isSelected,
                isFocusVisible,
                isDisabled,
                isOutsideMonth,
                isToday,
                isUnavailable,
              }) => (
                <span
                  className={slots.cellButton()}
                  data-hovered={isHovered || undefined}
                  data-pressed={isPressed || undefined}
                  data-selected={isSelected || undefined}
                  data-focus-visible={isFocusVisible || undefined}
                  data-disabled={isDisabled || undefined}
                  data-outside-month={isOutsideMonth || undefined}
                  data-today={isToday || undefined}
                  data-unavailable={isUnavailable || undefined}
                >
                  {formattedDate}
                </span>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </RACCalendar>
  );
}
