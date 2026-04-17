import type { ReactNode } from 'react';
import { useMemo } from 'react';

import { Surface } from '#src/common/components/surface';

import type { CardContextType } from '../context';
import { CardContext } from '../context';
import type { CardVariants } from '../variants';
import { cardVariants } from '../variants';

export interface CardContextProviderProps extends CardVariants {
  children: ReactNode;
}

export function CardContextProvider(props: CardContextProviderProps) {
  const { variant, children } = props;

  const value = useMemo<CardContextType>(() => {
    const calculatedVariant = variant ?? 'default';

    return {
      variant: calculatedVariant,
      slots: cardVariants({ variant }),
    };
  }, [variant]);

  if (value.variant === 'transparent') {
    return <CardContext value={value}>{children}</CardContext>;
  }

  return (
    <Surface.Provider {...value}>
      <CardContext value={value}>{children}</CardContext>
    </Surface.Provider>
  );
}
