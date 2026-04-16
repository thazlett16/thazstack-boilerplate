import { createContext, use } from 'react';

import type { dateFieldVariants } from '#src/common/components/date-field/variants';

export interface DateFieldContextType {
  slots: ReturnType<typeof dateFieldVariants>;
}

export const DateFieldContext = createContext<DateFieldContextType | undefined>(undefined);

export function useDateFieldContext() {
  return use(DateFieldContext);
}
