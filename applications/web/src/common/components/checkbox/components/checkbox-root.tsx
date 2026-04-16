import type { CheckboxProps as RACCheckboxProps } from 'react-aria-components';

import { composeRenderProps, Checkbox as RACCheckbox } from 'react-aria-components';

import { checkboxVariants } from '#src/common/components/checkbox/variants';

export type CheckboxRootProps = RACCheckboxProps;

const CheckIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3 text-primary-foreground"
  >
    <path d="M3 8l3.5 3.5L13 4.5" />
  </svg>
);

const MinusIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    className="w-3 h-3 text-primary-foreground"
  >
    <path d="M3.5 8h9" />
  </svg>
);

export function CheckboxRoot(props: CheckboxRootProps) {
  const slots = checkboxVariants();

  return (
    <RACCheckbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    >
      {composeRenderProps(props.children, (children, { isSelected, isIndeterminate }) => (
        <>
          <div className={slots.indicator()}>{isIndeterminate ? <MinusIcon /> : (isSelected ? <CheckIcon /> : null)}</div>
          {children && <span className={slots.label()}>{children}</span>}
        </>
      ))}
    </RACCheckbox>
  );
}
