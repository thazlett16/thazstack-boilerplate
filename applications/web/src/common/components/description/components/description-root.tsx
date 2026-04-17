import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';

import { descriptionVariants } from '../variants';

export type DescriptionRootProps = Omit<RACTextProps, 'slot'>;

export function DescriptionRoot(props: DescriptionRootProps) {
  const slots = descriptionVariants();

  return (
    <RACText
      {...props}
      slot="description"
      className={slots.root({ className: props.className })}
    />
  );
}
