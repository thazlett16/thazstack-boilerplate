import type { ReactNode } from 'react';

import { useMemo } from 'react';

import type { SurfaceContextType } from '#src/common/components/surface/context';
import type { SurfaceVariants } from '#src/common/components/surface/variants';

import { SurfaceContext } from '#src/common/components/surface/context';
import { surfaceVariants } from '#src/common/components/surface/variants';

export interface SurfaceContextProviderProps extends SurfaceVariants {
  children: ReactNode;
}

export function SurfaceContextProvider(props: SurfaceContextProviderProps) {
  const { variant, children } = props;

  const value = useMemo<SurfaceContextType>(
    () => ({
      variant,
      variants: surfaceVariants({ variant }),
    }),
    [variant],
  );

  return <SurfaceContext value={value}>{children}</SurfaceContext>;
}
