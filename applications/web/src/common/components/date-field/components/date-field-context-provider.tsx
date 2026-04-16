import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { DateFieldContextType } from '#src/common/components/date-field/context';

import { DateFieldContext } from '#src/common/components/date-field/context';
import { dateFieldVariants } from '#src/common/components/date-field/variants';

export interface DateFieldContextProviderProps {
  children: ReactNode;
}

export function DateFieldContextProvider({ children }: DateFieldContextProviderProps) {
  const value = useMemo<DateFieldContextType>(
    () => ({
      slots: dateFieldVariants(),
    }),
    [],
  );

  return <DateFieldContext value={value}>{children}</DateFieldContext>;
}
