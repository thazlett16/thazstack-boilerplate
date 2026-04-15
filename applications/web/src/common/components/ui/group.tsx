import type { GroupProps as RACGroupProps } from 'react-aria-components';

import { Group as RACGroup, composeRenderProps } from 'react-aria-components';

import { groupVariants } from '#src/common/variants/group-variants';

export type GroupProps = RACGroupProps;

export function Group(props: GroupProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return groupVariants({ ...renderProps, className });
      })}
    />
  );
}
