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

  const { variants } = context;

  return (
    <div
      {...props}
      className={variants.content({
        className: props.className,
      })}
      data-slot="card-content"
    />
  );
}
