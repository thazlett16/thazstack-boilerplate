import type { ReactNode } from 'react';
import type { ColorPickerProps as AriaColorPickerProps } from 'react-aria-components';

import { Button, ColorPicker as AriaColorPicker, DialogTrigger } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { ColorArea } from '#src/components/ui/color-area';
import { ColorField } from '#src/components/ui/color-field';
import { ColorSlider } from '#src/components/ui/color-slider';
import { ColorSwatch } from '#src/components/ui/color-swatch';
import { Dialog } from '#src/components/ui/dialog';
import { Popover } from '#src/components/ui/popover';
import { focusRing } from '#src/lib/react-aria-utils';

const buttonStyles = tv({
  extend: focusRing,
  base: 'border-0 bg-transparent flex gap-2 items-center cursor-default rounded-xs font-sans text-sm text-neutral-800 dark:text-neutral-200 [-webkit-tap-highlight-color:transparent]',
});

export interface ColorPickerProps extends Omit<AriaColorPickerProps, 'children'> {
  label?: string;
  children?: ReactNode;
}

export function ColorPicker({ label, children, ...props }: ColorPickerProps) {
  return (
    <AriaColorPicker {...props}>
      <DialogTrigger>
        <Button className={buttonStyles}>
          <ColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="flex flex-col gap-2">
            {children ?? (
              <>
                <ColorArea
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                />
                <ColorSlider
                  colorSpace="hsb"
                  channel="hue"
                />
                <ColorField label="Hex" />
              </>
            )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </AriaColorPicker>
  );
}
