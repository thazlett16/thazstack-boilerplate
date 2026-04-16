import type { ReactNode } from 'react';
import type { SelectProps as RACSelectProps } from 'react-aria-components';

import {
  Button as RACButton,
  composeRenderProps,
  ListBox as RACListBox,
  Popover as RACPopover,
  Select as RACSelect,
  SelectValue,
} from 'react-aria-components';

import { Description } from '#src/common/components/description';
import { dropdownVariants } from '#src/common/components/dropdown/variants';
import { FieldError } from '#src/common/components/field-error';
import { Label } from '#src/common/components/label';

export interface DropdownRootProps<T extends object> extends RACSelectProps<T> {
  label?: ReactNode;
  description?: ReactNode;
  placeholder?: string;
}

export function DropdownRoot<T extends object>({
  label,
  description,
  placeholder,
  children,
  ...props
}: DropdownRootProps<T>) {
  const slots = dropdownVariants();

  return (
    <RACSelect
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        slots.root({ ...renderProps, className }),
      )}
    >
      {label && <Label>{label}</Label>}

      <RACButton className={(renderProps) => slots.trigger({ ...renderProps })}>
        <SelectValue className={slots.value()}>
          {({ defaultChildren, isPlaceholder }) =>
            isPlaceholder ? <span>{placeholder ?? 'Select an option'}</span> : defaultChildren
          }
        </SelectValue>
        {/* Chevron icon */}
        <svg
          className={slots.chevron()}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </RACButton>

      {description && <Description>{description}</Description>}
      <FieldError />

      <RACPopover className={slots.popover()}>
        <RACListBox>{children}</RACListBox>
      </RACPopover>
    </RACSelect>
  );
}
