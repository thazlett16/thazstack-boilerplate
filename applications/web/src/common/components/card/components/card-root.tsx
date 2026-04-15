import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useMemo } from 'react';

import type { CardVariants } from '#src/common/components/card/variants';

import { CardContext, useCardContext } from '#src/common/components/card/context';
import { cardVariants } from '#src/common/components/card/variants';

export interface CardRootProps extends ComponentPropsWithRef<'div'>, CardVariants {
  children: ReactNode;
}

export function CardRoot(props: CardRootProps) {
  const slots = useMemo(() => {
    return cardVariants({ variant: props.variant });
  }, [props.variant]);

  return (
    <CardContext value={{ slots }}>
      <CardRootContent {...props} />
    </CardContext>
  );
}

function CardRootContent(props: CardRootProps) {
  const { slots } = useCardContext();

  return (
    <div
      {...props}
      className={slots.root({
        className: props.className,
      })}
      data-slot="card"
    />
  );
}
