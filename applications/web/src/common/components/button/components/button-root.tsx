import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import { composeRenderProps, Button as RACButton } from 'react-aria-components';

import type { ButtonVariants } from '../variants';
import { buttonVariants } from '../variants';

export type ButtonRootProps = RACButtonProps & ButtonVariants;

export function ButtonRoot(props: ButtonRootProps) {
  const variants = buttonVariants({
    variant: props.variant,
    size: props.size,
    fullWidth: props.fullWidth,
    isInverted: props.isInverted,
  });

  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return variants.root({ ...renderProps, className });
      })}
    />
  );
}
