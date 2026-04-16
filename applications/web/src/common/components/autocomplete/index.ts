import { AutocompleteRoot } from './components/autocomplete-root';

export { ListBoxItem as AutocompleteItem } from '#src/common/components/list-box';
export { ListBoxSection as AutocompleteSection } from '#src/common/components/list-box';

export const Autocomplete = Object.assign(AutocompleteRoot, {
  Root: AutocompleteRoot,
});

export type { AutocompleteRootProps } from './components/autocomplete-root';

export type { AutocompleteVariants } from './variants';
export { autocompleteVariants } from './variants';
