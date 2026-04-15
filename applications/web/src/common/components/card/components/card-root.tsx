import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { CardVariants } from '#src/common/components/card/variants';

import { useCardContext } from '#src/common/components/card/context';
import { Surface } from '#src/common/components/surface';

import { CardContextProvider } from './card-context-provider';

export interface CardRootProps extends ComponentPropsWithRef<'div'>, CardVariants {
  children: ReactNode;
}

export function CardRoot(props: CardRootProps) {
  return (
    <CardContextProvider variant={props.variant}>
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
    return (
      <CardRootInner {...props} />
    );
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

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.root({ className: props.className })}
      data-slot="card"
    />
  );
}
