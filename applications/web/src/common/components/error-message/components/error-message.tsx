import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';

import { errorMessageVariants } from '../variants';

export type ErrorMessageProps = Omit<RACTextProps, 'slot'>;

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
