import type { GroupProps as RACGroupProps, GroupRenderProps } from 'react-aria-components';

import { Group as RACGroup } from 'react-aria-components';

import { fieldsetVariants } from '../variants';

export type FieldsetRootProps = RACGroupProps;

export function FieldsetRoot({ className: _className, ...props }: FieldsetRootProps) {
  const { root } = fieldsetVariants();
  return (
    <RACGroup
      {...props}
      className={(renderProps: GroupRenderProps) => {
        const resolvedClassName =
          typeof _className === 'function' ? _className({ ...renderProps, defaultClassName: undefined }) : _className;
        return root({ ...renderProps, className: resolvedClassName });
      }}
    />
  );
}
