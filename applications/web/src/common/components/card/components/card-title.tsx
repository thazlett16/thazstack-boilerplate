import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '../context';

export interface CardTitleProps extends ComponentPropsWithRef<'h3'> {
  children: ReactNode;
}

export function CardTitle(props: CardTitleProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardTitle must be used within a Card or a component that extends a CardContextProvider');
  }

  const { variants } = context;

  return (
    <div
      {...props}
      className={variants.title({
        className: props.className,
      })}
      data-slot="card-title"
    />
  );
}
