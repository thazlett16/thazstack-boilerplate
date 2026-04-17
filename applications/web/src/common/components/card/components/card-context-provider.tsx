import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { CardContextType } from '../context';
import type { CardVariants } from '../variants';

import { CardContext } from '../context';
import { cardVariants } from '../variants';

export interface CardContextProviderProps extends CardVariants {
  children: ReactNode;
}

export function CardContextProvider(props: CardContextProviderProps) {
  const { variant, children } = props;

  const value = useMemo<CardContextType>(
    () => ({
      variant,
      variants: cardVariants({ variant }),
    }),
    [variant],
  );

  return <CardContext value={value}>{children}</CardContext>;
}
