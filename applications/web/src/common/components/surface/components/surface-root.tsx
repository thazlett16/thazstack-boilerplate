import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { SurfaceVariants } from '../variants';

import { useSurfaceContext } from '../context';
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

  const { variants } = context;

  return (
    <div
      {...props}
      className={variants.root({ className: props.className })}
      data-slot="surface"
    />
  );
}
