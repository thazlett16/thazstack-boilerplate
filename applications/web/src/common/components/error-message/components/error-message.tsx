import type { ReactNode } from 'react';

import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';

import type { ErrorMessageVariants } from '../variants';
import { errorMessageVariants } from '../variants';

export interface ErrorMessageProps extends Omit<RACTextProps, 'slot'>, ErrorMessageVariants {
  children: ReactNode;
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <RACText
      {...props}
      data-slot="errorMessage"
      slot="errorMessage"
      className={errorMessageVariants({ ...props })}
    />
  );
}
