import type { ReactNode } from 'react';
import type { ComboBoxProps as RACComboBoxProps } from 'react-aria-components';

import {
  Button as RACButton,
  ComboBox as RACComboBox,
  composeRenderProps,
  Group as RACGroup,
  Input as RACInput,
  ListBox as RACListBox,
  Popover as RACPopover,
} from 'react-aria-components';

import { comboboxVariants } from '#src/common/components/combobox/variants';
import { Description } from '#src/common/components/description';
import { FieldError } from '#src/common/components/field-error';
import { Label } from '#src/common/components/label';

export interface ComboboxRootProps<T extends object> extends RACComboBoxProps<T> {
  label?: ReactNode;
  description?: ReactNode;
  placeholder?: string;
}

export function ComboboxRoot<T extends object>({
  label,
  description,
  placeholder,
  children,
  ...props
}: ComboboxRootProps<T>) {
  const slots = comboboxVariants();

  return (
    <RACComboBox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        slots.root({ ...renderProps, className }),
      )}
    >
      {label && <Label>{label}</Label>}

      <RACGroup className={(renderProps) => slots.group({ ...renderProps })}>
        <RACInput
          {...(placeholder !== undefined ? { placeholder } : {})}
          className={slots.input()}
        />
        <RACButton className={(renderProps) => slots.trigger({ ...renderProps })}>
          {/* Chevron icon */}
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
            <path d="M4 6l4 4 4-4" />
          </svg>
        </RACButton>
      </RACGroup>

      {description && <Description>{description}</Description>}
      <FieldError />

      <RACPopover className={slots.popover()}>
        <RACListBox>{children}</RACListBox>
      </RACPopover>
    </RACComboBox>
  );
}
