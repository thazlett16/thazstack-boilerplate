import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { CardVariants } from '#src/common/components/card/variants';

import { Surface } from '#src/common/components/surface';
import { useCardContext } from '#src/common/components/card/context';

import { CardContextProvider } from './card-context-provider';

export interface CardRootProps extends ComponentPropsWithRef<'div'>, CardVariants {
  children: ReactNode;
}

export function CardRoot(props: CardRootProps) {
  return (
    <CardContextProvider variant={props.variant}>
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
  const { variant } = props;

  if (variant === 'transparent') {
    return (
      <div
        {...props}
        className={slots.root({ className: props.className })}
        data-slot="card"
      />
    );
  }

  return (
    <Surface
      {...props}
      variant={variant}
      className={slots.root({ className: props.className })}
      data-slot="card"
    />
  );
}
