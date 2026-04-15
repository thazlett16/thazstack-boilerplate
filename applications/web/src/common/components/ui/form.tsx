import type { FormProps as RACFormProps } from 'react-aria-components';

import { Form as RACForm } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export type FormProps = RACFormProps;

export function Form(props: FormProps) {
  return (
    <RACForm
      {...props}
      className={twMerge('flex flex-col gap-6', props.className)}
    />
  );
}
