import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardTitleProps extends ComponentPropsWithRef<'h3'> {
  children: ReactNode;
}

export function CardTitle(props: CardTitleProps) {
  const { slots } = useCardContext();

  return (
    <div
      {...props}
      className={slots.title({
        className: props.className,
      })}
      data-slot="card-title"
    />
  );
}
