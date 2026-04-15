import { createContext, use } from 'react';

import type { surfaceVariants } from '#src/common/components/surface/variants';

export interface SurfaceContextType {
  slots: ReturnType<typeof surfaceVariants>;
}

export const SurfaceContext = createContext<SurfaceContextType | undefined>(undefined);

export function useSurfaceContext() {
  return use(SurfaceContext);
}
