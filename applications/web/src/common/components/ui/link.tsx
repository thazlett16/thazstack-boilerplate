import type { LinkProps as RACLinkProps } from 'react-aria-components';
import type { VariantProps } from 'tailwind-variants';

import { Link as RACLink, composeRenderProps } from 'react-aria-components';

import { linkVariants } from '#src/common/variants/link-variants';

export interface LinkProps extends RACLinkProps {
  variant?: NonNullable<VariantProps<typeof linkVariants>['variant']>;
}

export function Link(props: LinkProps) {
  return (
    <RACLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return linkVariants({ ...renderProps, className, variant: props.variant });
      })}
    />
  );
}
