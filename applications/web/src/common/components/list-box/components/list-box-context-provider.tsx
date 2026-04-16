import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { ListBoxContextType } from '#src/common/components/list-box/context';

import { ListBoxContext } from '#src/common/components/list-box/context';
import { listBoxVariants } from '#src/common/components/list-box/variants';

export interface ListBoxContextProviderProps {
  children: ReactNode;
}

export function ListBoxContextProvider({ children }: ListBoxContextProviderProps) {
  const value = useMemo<ListBoxContextType>(
    () => ({
      slots: listBoxVariants(),
    }),
    [],
  );

  return <ListBoxContext value={value}>{children}</ListBoxContext>;
}
