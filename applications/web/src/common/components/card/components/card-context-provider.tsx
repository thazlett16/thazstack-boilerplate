import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { CardContextType } from '#src/common/components/card/context';
import type { CardVariants } from '#src/common/components/card/variants';

import { CardContext } from '#src/common/components/card/context';
import { cardVariants } from '#src/common/components/card/variants';

export interface CardContextProviderProps {
  variant?: CardVariants['variant'];
  children: ReactNode;
}

export function CardContextProvider({ variant, children }: CardContextProviderProps) {
  const value = useMemo<CardContextType>(
    () => ({
      variant,
      slots: cardVariants({ variant }),
    }),
    [variant],
  );

  return <CardContext value={value}>{children}</CardContext>;
}
