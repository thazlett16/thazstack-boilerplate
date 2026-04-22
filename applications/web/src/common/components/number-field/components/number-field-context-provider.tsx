import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { NumberFieldContextType } from '../context';
import { NumberFieldContext } from '../context';
import type { NumberFieldVariants } from '../variants';
import { numberFieldVariants } from '../variants';

export interface NumberFieldContextProviderProps extends NumberFieldVariants {
  children: ReactNode;
}

export function NumberFieldContextProvider(props: NumberFieldContextProviderProps) {
  const { children } = props;

  const value = useMemo<NumberFieldContextType>(() => {
    return {
      slots: numberFieldVariants(),
    };
  }, []);

  return <NumberFieldContext value={value}>{children}</NumberFieldContext>;
}
