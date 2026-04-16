import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { TimeFieldContextType } from '#src/common/components/time-field/context';

import { TimeFieldContext } from '#src/common/components/time-field/context';
import { timeFieldVariants } from '#src/common/components/time-field/variants';

export interface TimeFieldContextProviderProps {
  children: ReactNode;
}

export function TimeFieldContextProvider({ children }: TimeFieldContextProviderProps) {
  const value = useMemo<TimeFieldContextType>(
    () => ({
      slots: timeFieldVariants(),
    }),
    [],
  );

  return <TimeFieldContext value={value}>{children}</TimeFieldContext>;
}
