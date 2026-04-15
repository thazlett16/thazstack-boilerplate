import type { SeparatorProps as RACSeparatorProps } from 'react-aria-components';

import { Separator as RACSeparator } from 'react-aria-components';

import { separatorVariants } from '#src/common/variants/separator-variants';

export type SeparatorProps = RACSeparatorProps;

export function Separator(props: SeparatorProps) {
  return (
    <RACSeparator
      {...props}
      className={separatorVariants({ orientation: props.orientation, className: props.className })}
      // className={composeRenderProps(props.className, (className) => {
      //   // return separatorVariants({ orientation: props.orientation, className });
      //   return '';
      // })}
    />
  );
}
