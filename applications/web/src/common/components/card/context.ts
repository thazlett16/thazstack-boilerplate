import { createContext, use } from 'react';

import type { cardVariants } from '#src/common/components/card/variants';

export interface CardContextType {
  slots: ReturnType<typeof cardVariants>;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCardContext = () => {
  const context = use(CardContext);

  if (context === undefined) {
    throw new Error('useCardContext must be used within a Card');
  }

  return context;
};
