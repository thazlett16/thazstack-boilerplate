import type { ReactNode } from 'react';
import type { ListBoxSectionProps as RACListBoxSectionProps } from 'react-aria-components';

import { Header, ListBoxSection as RACListBoxSection } from 'react-aria-components';

import { useListBoxContext } from '#src/common/components/list-box/context';
import { listBoxVariants } from '#src/common/components/list-box/variants';

export interface ListBoxSectionProps<T extends object> extends RACListBoxSectionProps<T> {
  title?: ReactNode;
}

const fallbackSlots = listBoxVariants();

export function ListBoxSection<T extends object>({ title, ...props }: ListBoxSectionProps<T>) {
  const context = useListBoxContext();
  const slots = context?.slots ?? fallbackSlots;

  return (
    <RACListBoxSection
      {...props}
      className={slots.section({ className: typeof props.className === 'string' ? props.className : undefined })}
    >
      {title !== undefined && <Header className={slots.sectionHeader()}>{title}</Header>}
      {props.children as ReactNode}
    </RACListBoxSection>
  );
}
