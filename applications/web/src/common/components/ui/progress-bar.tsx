import type { ProgressBarProps as RACProgressBarProps } from 'react-aria-components';

import { ProgressBar as RACProgressBar, composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

import { Label } from '#src/common/components/ui/label';

export interface ProgressBarProps extends RACProgressBarProps {
  label?: string;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <RACProgressBar
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return twMerge('flex flex-col gap-2 font-sans w-64 max-w-full', className);
      })}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{props.label}</Label>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">{valueText}</span>
          </div>
          <div className="max-w-full h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 outline outline-1 -outline-offset-1 outline-transparent relative overflow-hidden">
            <div
              className={`absolute top-0 h-full rounded-full bg-blue-500 forced-colors:bg-[Highlight] ${isIndeterminate ? 'left-full animate-in duration-1000 slide-in-from-left-[20rem] repeat-infinite ease-out' : 'left-0'}`}
              style={{ width: `${isIndeterminate ? 40 : percentage}%` }}
            />
          </div>
        </>
      )}
    </RACProgressBar>
  );
}

// TODO - Need to update this to be full width. Also should move indeterminate to a tw-variant
