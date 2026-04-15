import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardContentProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export function CardContent(props: CardContentProps) {
  const { slots } = useCardContext();

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
