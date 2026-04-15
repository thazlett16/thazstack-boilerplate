import type { TextProps as RACTextProps } from 'react-aria-components';

import { Text as RACText } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export type DescriptionProps = Omit<RACTextProps, 'slot'>;

export function Description(props: DescriptionProps) {
  return (
    <RACText
      {...props}
      slot="description"
      className={twMerge('text-sm text-neutral-600', props.className)}
    />
  );
}
