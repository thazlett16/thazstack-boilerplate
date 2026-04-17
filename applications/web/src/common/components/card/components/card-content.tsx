import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '../context';

export interface CardContentProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export function CardContent(props: CardContentProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardContent must be used within a Card or a component that extends a CardContextProvider');
  }

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.content({
        className: props.className,
      })}
      data-slot="card-content"
    />
  );
}
