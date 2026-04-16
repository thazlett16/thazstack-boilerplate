import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { ButtonContextType } from '#src/common/components/button/context';
import type { ButtonVariants } from '#src/common/components/button/variants';

import { ButtonContext } from '#src/common/components/button/context';
import { buttonVariants } from '#src/common/components/button/variants';

export interface ButtonContextProviderProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  isInverted?: ButtonVariants['isInverted'];
  children: ReactNode;
}

export function ButtonContextProvider({ variant, size, isInverted, children }: ButtonContextProviderProps) {
  const value = useMemo<ButtonContextType>(
    () => ({
      variant,
      size,
      isInverted,
      slots: buttonVariants({ variant, size, isInverted }),
    }),
    [variant, size, isInverted],
  );

  return <ButtonContext value={value}>{children}</ButtonContext>;
}
