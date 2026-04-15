import type { NumberFieldProps as RACNumberFieldProps, ButtonProps, ValidationResult } from 'react-aria-components';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { NumberField as RACNumberField, Button, composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

import { Description } from '#src/common/components/ui/description';
import { FieldError } from '#src/common/components/ui/field-error';
import { Group } from '#src/common/components/ui/group';
import { Input } from '#src/common/components/ui/input';
import { Label } from '#src/common/components/ui/label';
import { fieldBorderVariants } from '#src/common/variants/field-border-variants';
import { inputVariants } from '#src/common/variants/input-variants';

export interface NumberFieldProps extends RACNumberFieldProps {
  label?: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function NumberField(props: NumberFieldProps) {
  const { label, description, errorMessage } = props;

  return (
    <RACNumberField
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge('group flex flex-col gap-1 font-sans', className);
      })}
    >
      <Label>{label}</Label>
      <Group>
        {(renderProps) => (
          <>
            <Input className={inputVariants} />
            <div className={fieldBorderVariants({ ...renderProps, class: 'flex flex-col border-s h-full' })}>
              <StepperButton slot="increment">
                <ChevronUp
                  aria-hidden
                  className="w-4 h-4"
                />
              </StepperButton>
              <div className={fieldBorderVariants({ ...renderProps, class: 'border-b' })} />
              <StepperButton slot="decrement">
                <ChevronDown
                  aria-hidden
                  className="w-4 h-4"
                />
              </StepperButton>
            </div>
          </>
        )}
      </Group>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACNumberField>
  );
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="flex border-0 py-0 px-0.5 flex-1 box-border cursor-default text-neutral-500 bg-transparent pressed:bg-neutral-100 group-disabled:text-neutral-200 dark:text-neutral-400 dark:pressed:bg-neutral-800 dark:group-disabled:text-neutral-600 forced-colors:group-disabled:text-[GrayText] [-webkit-tap-highlight-color:transparent]"
    />
  );
}
