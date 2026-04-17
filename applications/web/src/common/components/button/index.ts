import { ButtonRoot } from './components/button-root';

export const Button = Object.assign(ButtonRoot, {
  Root: ButtonRoot,
});

export type { ButtonRootProps } from './components/button-root';

export type { ButtonVariants, RequiredButtonVariants, SlotsButtonVariants } from './variants';
export { buttonVariants } from './variants';
