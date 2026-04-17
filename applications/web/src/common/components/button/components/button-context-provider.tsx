import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { ButtonContextType } from '../context';
import type { ButtonVariants } from '../variants';

import { ButtonContext } from '../context';
import { buttonVariants } from '../variants';

export interface ButtonContextProviderProps extends ButtonVariants {
  children: ReactNode;
}

export function ButtonContextProvider(props: ButtonContextProviderProps) {
  const { variant, children } = props;

  const value = useMemo<ButtonContextType>(
    () => ({
      variant,
      variants: buttonVariants({ variant }),
    }),
    [variant],
  );

  return <ButtonContext value={value}>{children}</ButtonContext>;
}
