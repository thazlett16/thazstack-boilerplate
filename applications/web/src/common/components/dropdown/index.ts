import { DropdownRoot } from './components/dropdown-root';

export { ListBoxItem as DropdownItem } from '#src/common/components/list-box';
export { ListBoxSection as DropdownSection } from '#src/common/components/list-box';

export const Dropdown = Object.assign(DropdownRoot, {
  Root: DropdownRoot,
});

export type { DropdownRootProps } from './components/dropdown-root';

export type { DropdownVariants } from './variants';
export { dropdownVariants } from './variants';
