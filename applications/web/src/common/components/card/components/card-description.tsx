import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '../context';

export interface CardDescriptionProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode;
}

export function CardDescription(props: CardDescriptionProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardDescription must be used within a Card or a component that extends a CardContextProvider');
  }

  const { variants } = context;

  return (
    <div
      {...props}
      className={variants.description({
        className: props.className,
      })}
      data-slot="card-description"
    />
  );
}
