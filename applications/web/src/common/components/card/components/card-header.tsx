import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useCardContext } from '#src/common/components/card/context';

export interface CardHeaderProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
}

export function CardHeader(props: CardHeaderProps) {
  const { slots } = useCardContext();

  return (
    <div
      {...props}
      className={slots.header({
        className: props.className,
      })}
      data-slot="card-header"
    />
  );
}
