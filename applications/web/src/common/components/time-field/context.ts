import { createContext, use } from 'react';

import type { timeFieldVariants } from '#src/common/components/time-field/variants';

export interface TimeFieldContextType {
  slots: ReturnType<typeof timeFieldVariants>;
}

export const TimeFieldContext = createContext<TimeFieldContextType | undefined>(undefined);

export function useTimeFieldContext() {
  return use(TimeFieldContext);
}
