import type { ReactNode } from 'react';
import type { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps, ValidationResult } from 'react-aria-components';

import { ChevronDown } from 'lucide-react';
import { ComboBox as AriaComboBox, ComboBoxValue, ListBox } from 'react-aria-components';

import type { DropdownSectionProps } from '#src/components/ui/list-box';

import { Description, FieldError, FieldGroup, Input, Label } from '#src/components/ui/field';
import { FieldButton } from '#src/components/ui/field-button';
import { DropdownItem, DropdownSection } from '#src/components/ui/list-box';
import { Popover } from '#src/components/ui/popover';
import { composeTailwindRenderProps } from '#src/lib/react-aria-utils';

export interface ComboBoxProps<T extends object, M extends 'single' | 'multiple'> extends Omit<
  AriaComboBoxProps<T, M>,
  'children'
> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
  children: ReactNode | ((item: T) => ReactNode);
}

export function ComboBox<T extends object, M extends 'single' | 'multiple' = 'single'>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: ComboBoxProps<T, M>) {
  return (
    <AriaComboBox
      {...props}
      className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1 font-sans')}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <Input className="ps-3 pe-1" />
        <FieldButton className="w-6 mr-1 outline-offset-0">
          <ChevronDown
            aria-hidden
            className="w-4 h-4"
          />
        </FieldButton>
      </FieldGroup>
      {props.selectionMode === 'multiple' && (
        <ComboBoxValue
          placeholder="No items selected"
          className="text-xs text-neutral-600 dark:text-neutral-300"
        />
      )}
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="w-(--trigger-width)">
        <ListBox
          items={items}
          className="outline-0 p-1 box-border max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

export function ComboBoxSection<T extends object>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}
