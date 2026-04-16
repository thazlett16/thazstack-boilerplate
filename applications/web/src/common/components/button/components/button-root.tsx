import type { ButtonProps as RACButtonProps } from 'react-aria-components';

import { composeRenderProps, Button as RACButton } from 'react-aria-components';

import type { ButtonVariants } from '#src/common/components/button/variants';

import { useButtonContext } from '#src/common/components/button/context';

import { ButtonContextProvider } from './button-context-provider';

export interface ButtonRootProps extends RACButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  isInverted?: ButtonVariants['isInverted'];
}

export function ButtonRoot(props: ButtonRootProps) {
  return (
    <ButtonContextProvider
      variant={props.variant}
      size={props.size}
      isInverted={props.isInverted}
    >
      <ButtonRootInner {...props} />
    </ButtonContextProvider>
  );
}

function ButtonRootInner(props: ButtonRootProps) {
  const context = useButtonContext();

  if (context === undefined) {
    throw new Error('ButtonRoot must be used within a ButtonContextProvider');
  }

  const { slots } = context;

  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className) => slots.root({ className }))}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {children}
          {isPending && (
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--btn-fg)"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  className="opacity-25"
                />
                <path
                  d="M12 3a9 9 0 0 1 9 9"
                  className="opacity-90"
                />
              </svg>
            </span>
          )}
        </>
      ))}
    </RACButton>
  );
}
