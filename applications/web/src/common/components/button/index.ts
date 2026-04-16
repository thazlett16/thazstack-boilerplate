import { ButtonContextProvider } from './components/button-context-provider';
import { ButtonRoot } from './components/button-root';

export const Button = Object.assign(ButtonRoot, {
  Root: ButtonRoot,
  Provider: ButtonContextProvider,
});

export type { ButtonContextProviderProps } from './components/button-context-provider';
export type { ButtonRootProps } from './components/button-root';

export { useButtonContext } from './context';

export type { ButtonVariants } from './variants';
export { buttonVariants } from './variants';
