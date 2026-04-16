import type { ReactNode } from 'react';
import type { AutocompleteProps as RACAutocompleteProps } from 'react-aria-components';

import { Autocomplete as RACAutocomplete, Input as RACInput, ListBox as RACListBox } from 'react-aria-components';

import { autocompleteVariants } from '#src/common/components/autocomplete/variants';
import { Description } from '#src/common/components/description';
import { Label } from '#src/common/components/label';

export interface AutocompleteRootProps<T extends object> extends RACAutocompleteProps<T> {
  label?: ReactNode;
  description?: ReactNode;
  placeholder?: string;
}

export function AutocompleteRoot<T extends object>({
  label,
  description,
  placeholder,
  children,
  ...props
}: AutocompleteRootProps<T>) {
  const slots = autocompleteVariants();

  return (
    <div className={slots.root()}>
      {label && <Label>{label}</Label>}

      {/* RAC Autocomplete manages filtering state and connects Input → ListBox */}
      <RACAutocomplete {...props}>
        <RACInput
          {...(placeholder !== undefined ? { placeholder } : {})}
          className={(renderProps) => slots.input({ ...renderProps })}
        />
        <RACListBox className={slots.listbox()}>{children}</RACListBox>
      </RACAutocomplete>

      {description && <Description>{description}</Description>}
    </div>
  );
}
