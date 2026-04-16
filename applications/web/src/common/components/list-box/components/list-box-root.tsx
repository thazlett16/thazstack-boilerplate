import type { ListBoxProps as RACListBoxProps } from 'react-aria-components';

import { composeRenderProps, ListBox as RACListBox } from 'react-aria-components';

import { useListBoxContext } from '#src/common/components/list-box/context';

import { ListBoxContextProvider } from './list-box-context-provider';

export interface ListBoxRootProps<T extends object> extends RACListBoxProps<T> {}

export function ListBoxRoot<T extends object>(props: ListBoxRootProps<T>) {
  return (
    <ListBoxContextProvider>
      <ListBoxRootInner {...props} />
    </ListBoxContextProvider>
  );
}

function ListBoxRootInner<T extends object>(props: ListBoxRootProps<T>) {
  const context = useListBoxContext();

  if (context === undefined) {
    throw new Error('ListBoxRoot must be used within a ListBoxContextProvider');
  }

  const { slots } = context;

  return (
    <RACListBox
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return slots.root({ className });
      })}
    />
  );
}
