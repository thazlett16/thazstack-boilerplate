import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '../context';
import type { CardVariants } from '../variants';
import { CardContextProvider } from './card-context-provider';

export interface CardRootProps extends ComponentPropsWithRef<'div'>, CardVariants {
  children: ReactNode;
}

export function CardRoot(props: CardRootProps) {
  return (
    <CardContextProvider {...props}>
      <CardRootInner {...props} />
    </CardContextProvider>
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
