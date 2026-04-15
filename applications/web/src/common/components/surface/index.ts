import type { SurfaceRootProps } from './components/surface-root';

import { SurfaceRoot } from './components/surface-root';

export const Surface = Object.assign(SurfaceRoot, {
  Root: SurfaceRoot,
});

export type { SurfaceRootProps };

export { useSurfaceContext } from './context';

export type { SurfaceVariants } from './variants';
export { surfaceVariants } from './variants';
