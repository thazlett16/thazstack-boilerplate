import { createContext, use } from 'react';

import type { cardVariants, CardVariants } from '#src/common/components/card/variants';

export interface CardContextType {
  variant: CardVariants['variant'];
  slots: ReturnType<typeof cardVariants>;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

export function useCardContext() {
  return use(CardContext);
}
