import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';

import { descriptionVariants } from '../variants';

export type DescriptionProps = Omit<RACTextProps, 'slot'>;

export function Description(props: DescriptionProps) {
  return (
    <RACText
      {...props}
      data-slot="description"
      slot="description"
      className={descriptionVariants({ ...props })}
    />
  );
}
