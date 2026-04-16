import type { ButtonProps as RACButtonProps } from 'react-aria-components';

import { composeRenderProps, Button as RACButton } from 'react-aria-components';

import type { ButtonVariants } from '#src/common/components/button/variants';

import { useButtonContext } from '#src/common/components/button/context';

import { ButtonContextProvider } from './button-context-provider';

export interface ButtonRootProps extends RACButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  isInverted?: ButtonVariants['isInverted'];
}

export function ButtonRoot(props: ButtonRootProps) {
  return (
    <ButtonContextProvider
      variant={props.variant}
      size={props.size}
      isInverted={props.isInverted}
    >
      <ButtonRootInner {...props} />
    </ButtonContextProvider>
  );
}

function ButtonRootInner(props: ButtonRootProps) {
  const context = useButtonContext();

  if (context === undefined) {
    throw new Error('ButtonRoot must be used within a ButtonContextProvider');
  }

  const { slots } = context;

  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    />
  );
}
