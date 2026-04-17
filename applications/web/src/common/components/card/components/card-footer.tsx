import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '../context';

export interface CardFooterProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export function CardFooter(props: CardFooterProps) {
  const context = useCardContext();

  if (context === undefined) {
    throw new Error('CardFooter must be used within a Card or a component that extends a CardContextProvider');
  }

  const { variants } = context;

  return (
    <div
      {...props}
      className={variants.footer({
        className: props.className,
      })}
      data-slot="card-footer"
    />
  );
}
