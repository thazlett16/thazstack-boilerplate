import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import { composeRenderProps, Button as RACButton } from 'react-aria-components';

import type { ButtonVariants } from '../variants';
import { buttonVariants } from '../variants';

export type ButtonRootProps = RACButtonProps & ButtonVariants;

export function Button(props: ButtonRootProps) {
  return (
    <RACButton
      {...props}
      data-slot="button"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return buttonVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
