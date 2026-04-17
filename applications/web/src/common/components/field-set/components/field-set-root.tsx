import type { GroupProps as RACGroupProps } from 'react-aria-components';

import { composeRenderProps, Group as RACGroup } from 'react-aria-components';

import type { FieldSetVariants } from '../variants';

import { fieldSetVariants } from '../variants';

export type FieldSetRootProps = RACGroupProps & FieldSetVariants;

export function FieldSetRoot(props: FieldSetRootProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return fieldSetVariants({ ...renderProps, className });
      })}
    />
  );
}
