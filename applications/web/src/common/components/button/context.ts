import { createContext, use } from 'react';

import type { buttonVariants, ButtonVariants } from './variants';

export interface ButtonContextType extends NonNullable<ButtonVariants> {
  variants: ReturnType<typeof buttonVariants>;
}

export const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export function useButtonContext() {
  return use(ButtonContext);
}
