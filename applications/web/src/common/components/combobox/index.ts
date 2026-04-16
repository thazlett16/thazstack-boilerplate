import { ComboboxRoot } from './components/combobox-root';

export { ListBoxItem as ComboboxItem } from '#src/common/components/list-box';
export { ListBoxSection as ComboboxSection } from '#src/common/components/list-box';

export const Combobox = Object.assign(ComboboxRoot, {
  Root: ComboboxRoot,
});

export type { ComboboxRootProps } from './components/combobox-root';

export type { ComboboxVariants } from './variants';
export { comboboxVariants } from './variants';
