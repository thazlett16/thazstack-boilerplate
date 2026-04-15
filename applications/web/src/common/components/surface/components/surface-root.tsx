import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { SurfaceVariants } from '#src/common/components/surface/variants';

import { useSurfaceContext } from '#src/common/components/surface/context';

import { SurfaceContextProvider } from './surface-context';

export interface SurfaceRootProps extends ComponentPropsWithRef<'div'>, SurfaceVariants {
  children: ReactNode;
}

export function SurfaceRoot({ variant, ...props }: SurfaceRootProps) {
  return (
    <SurfaceContextProvider variant={variant}>
      <SurfaceRootInner {...props} />
    </SurfaceContextProvider>
  );
}

function SurfaceRootInner(props: ComponentPropsWithRef<'div'>) {
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
