import type { ReactNode } from 'react';
import { useMemo } from 'react';

import type { TextFieldContextType } from '../context';
import { TextFieldContext } from '../context';
import type { TextFieldVariants } from '../variants';
import { textFieldVariants } from '../variants';

export interface TextFieldContextProviderProps extends TextFieldVariants {
  children: ReactNode;
}

export function TextFieldContextProvider(props: TextFieldContextProviderProps) {
  const { children } = props;

  const value = useMemo<TextFieldContextType>(() => {
    return {
      slots: textFieldVariants(),
    };
  }, []);

  return <TextFieldContext value={value}>{children}</TextFieldContext>;
}
