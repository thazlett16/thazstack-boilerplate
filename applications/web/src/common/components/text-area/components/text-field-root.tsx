import type { TextAreaProps as RACTextAreaProps } from 'react-aria-components';
import { composeRenderProps, TextArea as RACTextArea } from 'react-aria-components';

import type { TextAreaVariants } from '../variants';
import { textAreaVariants } from '../variants';

export type TextAreaRootProps = RACTextAreaProps & TextAreaVariants;

export function TextAreaRoot(props: TextAreaRootProps) {
  const slots = textAreaVariants();

  return (
    <RACTextArea
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...renderProps, className });
      })}
    />
  );
}
