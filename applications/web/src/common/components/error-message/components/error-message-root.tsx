import type { TextProps as RACTextProps } from 'react-aria-components';

import { Text } from 'react-aria-components';

import { errorMessageVariants } from '#src/common/components/error-message/variants';

export type ErrorMessageRootProps = Omit<RACTextProps, 'slot'>;

const { root } = errorMessageVariants();

export function ErrorMessageRoot({ className, ...props }: ErrorMessageRootProps) {
  return (
    <Text
      {...props}
      slot="errorMessage"
      className={root({ className })}
    />
  );
}
