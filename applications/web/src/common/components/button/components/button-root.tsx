import type { ButtonProps as RACButtonProps } from 'react-aria-components';

import { composeRenderProps, Button as RACButton } from 'react-aria-components';

import type { ButtonVariants } from '../variants';

import { useButtonContext } from '../context';
import { ButtonContextProvider } from './button-context-provider';

export type ButtonRootProps = RACButtonProps & ButtonVariants;

export function ButtonRoot(props: ButtonRootProps) {
  return (
    <ButtonContextProvider {...props}>
      <ButtonRootInner {...props} />
    </ButtonContextProvider>
  );
}

function ButtonRootInner(props: ButtonRootProps) {
  const context = useButtonContext();

  if (context === undefined) {
    throw new Error('ButtonRoot must be used within a component that extends a SurfaceContextProvider');
  }

  const { variants } = context;

  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return variants.root({ ...renderProps, className });
      })}
    />
  );
}
