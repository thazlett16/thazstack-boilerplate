import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { CardVariants } from '#src/common/components/card/variants';

import { CardContext } from '#src/common/components/card/context';
import { cardVariants } from '#src/common/components/card/variants';

interface CardContextProviderProps {
  variant?: CardVariants['variant'];
  children: ReactNode;
}

export function CardContextProvider({ variant, children }: CardContextProviderProps) {
  const value = useMemo(() => ({ slots: cardVariants({ variant }) }), [variant]);

  return <CardContext value={value}>{children}</CardContext>;
}
