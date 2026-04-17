import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';

import { errorMessageVariants } from '../variants';

export type ErrorMessageRootProps = Omit<RACTextProps, 'slot'>;

export function ErrorMessageRoot(props: ErrorMessageRootProps) {
  const slots = errorMessageVariants();

  return (
    <RACText
      {...props}
      slot="errorMessage"
      className={slots.root({ className: props.className })}
    />
  );
}
