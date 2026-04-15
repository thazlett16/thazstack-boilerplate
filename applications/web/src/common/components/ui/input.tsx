import type { InputProps as RACInputProps } from 'react-aria-components';

import { Input as RACInput, composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export type InputProps = RACInputProps;

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge(
          'px-3 py-0 min-h-9 flex-1 min-w-0 border-0 outline outline-0 bg-white dark:bg-neutral-900 font-sans text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-600 dark:placeholder:text-neutral-400 disabled:text-neutral-200 dark:disabled:text-neutral-600 disabled:placeholder:text-neutral-200 dark:disabled:placeholder:text-neutral-600 [-webkit-tap-highlight-color:transparent]',
          className,
        );
      })}
    />
  );
}
