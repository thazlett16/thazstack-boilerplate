import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { SurfaceVariants } from '#src/common/components/surface/variants';

import { SurfaceContext } from '#src/common/components/surface/context';
import { surfaceVariants } from '#src/common/components/surface/variants';

interface SurfaceContextProviderProps {
  variant: SurfaceVariants['variant'];
  children: ReactNode;
}

export function SurfaceContextProvider({ variant, children }: SurfaceContextProviderProps) {
  const value = useMemo(() => ({ slots: surfaceVariants({ variant }) }), [variant]);

  return <SurfaceContext value={value}>{children}</SurfaceContext>;
}
