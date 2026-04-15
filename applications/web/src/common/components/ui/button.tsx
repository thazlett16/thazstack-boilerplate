import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import type { VariantProps } from 'tailwind-variants';

import { composeRenderProps, Button as RACButton } from 'react-aria-components';

import { buttonVariants } from '#src/common/variants/button-variants';

export interface ButtonProps extends RACButtonProps {
  variant?: NonNullable<VariantProps<typeof buttonVariants>['variant']>;
}

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return buttonVariants({ ...renderProps, variant: props.variant, className });
      })}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {children}
          {isPending && (
            <span
              aria-hidden
              className="flex absolute inset-0 justify-center items-center"
            >
              <svg
                className="w-4 h-4 text-white animate-spin"
                viewBox="0 0 24 24"
                stroke={
                  props.variant === 'secondary' || props.variant === 'quiet' ? 'light-dark(black, white)' : 'white'
                }
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                  fill="none"
                  className="opacity-25"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  pathLength="100"
                  strokeDasharray="60 140"
                  strokeDashoffset="0"
                />
              </svg>
            </span>
          )}
        </>
      ))}
    </RACButton>
  );
}
