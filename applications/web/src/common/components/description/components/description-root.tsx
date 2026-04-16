import type { TextProps as RACTextProps } from 'react-aria-components';

import { Text } from 'react-aria-components';

import { descriptionVariants } from '../variants';

export type DescriptionRootProps = Omit<RACTextProps, 'slot'>;

export function DescriptionRoot({ className, ...props }: DescriptionRootProps) {
  const { root } = descriptionVariants();
  return (
    <Text
      {...props}
      slot="description"
      className={root({ className: typeof className === 'string' ? className : undefined })}
    />
  );
}
