import { createContext, use } from 'react';

import type { cardVariants, CardVariants } from './variants';

export interface CardContextType extends CardVariants {
  variants: ReturnType<typeof cardVariants>;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

export function useCardContext() {
  return use(CardContext);
}
