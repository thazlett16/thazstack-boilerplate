import type { ComponentPropsWithRef, ReactNode } from 'react';

import { Surface } from '#src/common/components/surface';

import type { CardVariants } from '../variants';

import { useCardContext } from '../context';
import { CardContextProvider } from './card-context-provider';

export interface CardRootProps extends ComponentPropsWithRef<'div'>, CardVariants {
  children: ReactNode;
}

export function CardRoot(props: CardRootProps) {
  return (
    <CardContextProvider {...props}>
      <CardRootWrapper {...props} />
    </CardContextProvider>
  );
}

function CardRootWrapper(props: CardRootProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardRoot must be used within a component that extends a CardContextProvider');
  }

  const { variant } = context;

  if (variant === 'transparent') {
    return <CardRootInner {...props} />;
  }

  return (
    <Surface.Provider variant={variant}>
      <CardRootInner {...props} />
    </Surface.Provider>
  );
}

function CardRootInner(props: CardRootProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardRoot must be used within a component that extends a CardContextProvider');
  }

  const { variants } = context;

  return (
    <div
      {...props}
      className={variants.root({ className: props.className })}
      data-slot="card"
    />
  );
}
