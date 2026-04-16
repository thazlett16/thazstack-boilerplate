import { createContext, use } from 'react';

import type { buttonVariants, ButtonVariants } from '#src/common/components/button/variants';

export interface ButtonContextType {
  variant: ButtonVariants['variant'];
  size: ButtonVariants['size'];
  isInverted: ButtonVariants['isInverted'];
  slots: ReturnType<typeof buttonVariants>;
}

export const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export function useButtonContext() {
  return use(ButtonContext);
}
