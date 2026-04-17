import type { ComponentPropsWithRef, ReactNode } from 'react';

import { useSurfaceContext } from '../context';
import type { SurfaceVariants } from '../variants';
import { SurfaceContextProvider } from './surface-context-provider';

export interface SurfaceRootProps extends ComponentPropsWithRef<'div'>, SurfaceVariants {
  children: ReactNode;
}

export function SurfaceRoot(props: SurfaceRootProps) {
  return (
    <SurfaceContextProvider {...props}>
      <SurfaceRootInner {...props} />
    </SurfaceContextProvider>
  );
}

function SurfaceRootInner(props: SurfaceRootProps) {
  const context = useSurfaceContext();

  if (context === undefined) {
    throw new Error('SurfaceRoot must be used within a component that extends a SurfaceContextProvider');
  }

  const { slots } = context;

  return (
    <div
      {...props}
      className={slots.root({ className: props.className })}
      data-slot="surface"
    />
  );
}
