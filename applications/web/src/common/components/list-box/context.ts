import { createContext, use } from 'react';

import type { listBoxVariants } from '#src/common/components/list-box/variants';

export interface ListBoxContextType {
  slots: ReturnType<typeof listBoxVariants>;
}

export const ListBoxContext = createContext<ListBoxContextType | undefined>(undefined);

export function useListBoxContext() {
  return use(ListBoxContext);
}
