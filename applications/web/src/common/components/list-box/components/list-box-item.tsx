import type { ListBoxItemProps as RACListBoxItemProps } from 'react-aria-components';

import { composeRenderProps, ListBoxItem as RACListBoxItem } from 'react-aria-components';

import { useListBoxContext } from '#src/common/components/list-box/context';
import { listBoxVariants } from '#src/common/components/list-box/variants';

export interface ListBoxItemProps<T extends object = object> extends RACListBoxItemProps<T> {}

const fallbackSlots = listBoxVariants();

export function ListBoxItem<T extends object = object>(props: ListBoxItemProps<T>) {
  const context = useListBoxContext();
  const slots = context?.slots ?? fallbackSlots;

  return (
    <RACListBoxItem
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return slots.item({ className });
      })}
    />
  );
}
