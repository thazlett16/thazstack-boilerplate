import type { ReactNode } from 'react';
import type { TooltipProps as RACTooltipProps } from 'react-aria-components';

import { Tooltip as RACTooltip, OverlayArrow, composeRenderProps } from 'react-aria-components';

import { tooltipVariants } from '#src/common/variants/tooltip-variants';

export interface TooltipProps extends Omit<RACTooltipProps, 'children'> {
  children: ReactNode;
}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <RACTooltip
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return tooltipVariants({ ...renderProps, className });
      })}
    >
      <OverlayArrow>
        <svg
          width={8}
          height={8}
          viewBox="0 0 8 8"
          className="block fill-neutral-700 dark:fill-neutral-600 forced-colors:fill-[Canvas] stroke-neutral-800 dark:stroke-white/10 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90"
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </RACTooltip>
  );
}

// TODO - Change Overlay arrow to an icon?
