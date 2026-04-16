import { ListBoxContextProvider } from './components/list-box-context-provider';
import { ListBoxItem } from './components/list-box-item';
import { ListBoxRoot } from './components/list-box-root';
import { ListBoxSection } from './components/list-box-section';

export const ListBox = Object.assign(ListBoxRoot, {
  Root: ListBoxRoot,
  Item: ListBoxItem,
  Section: ListBoxSection,
  Provider: ListBoxContextProvider,
});

export type { ListBoxContextProviderProps } from './components/list-box-context-provider';
export type { ListBoxItemProps } from './components/list-box-item';
export type { ListBoxRootProps } from './components/list-box-root';
export type { ListBoxSectionProps } from './components/list-box-section';

export { useListBoxContext } from './context';

// Named re-exports for convenience (used by Dropdown, Combobox, Autocomplete)
export { ListBoxItem } from './components/list-box-item';
export { ListBoxSection } from './components/list-box-section';

export type { ListBoxVariants } from './variants';
export { listBoxVariants } from './variants';
