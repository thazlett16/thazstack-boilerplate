import { ButtonRoot } from './components/button-root';
import { ButtonContextProvider } from './components/button-context-provider';

export const Button = Object.assign(ButtonRoot, {
  Root: ButtonRoot,
  Provider: ButtonContextProvider,
});

export type { ButtonRootProps } from './components/button-root';

export type { ButtonVariants } from './variants';
export { buttonVariants } from './variants';
