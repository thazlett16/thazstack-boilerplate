import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardDescriptionProps extends ComponentPropsWithRef<'p'> {
  children: ReactNode;
}

export function CardDescription(props: CardDescriptionProps) {
  const { slots } = useCardContext();

  return (
    <div
      {...props}
      className={slots.description({
        className: props.className,
      })}
      data-slot="card-description"
    />
  );
}
