import { TimeFieldContextProvider } from './components/time-field-context-provider';
import { TimeFieldInput } from './components/time-field-input';
import { TimeFieldRoot } from './components/time-field-root';

export const TimeField = Object.assign(TimeFieldRoot, {
  Root: TimeFieldRoot,
  Input: TimeFieldInput,
  Provider: TimeFieldContextProvider,
});

export type { TimeFieldContextProviderProps } from './components/time-field-context-provider';
export type { TimeFieldInputProps } from './components/time-field-input';
export type { TimeFieldRootProps } from './components/time-field-root';

export { useTimeFieldContext } from './context';

export type { TimeFieldVariants } from './variants';
export { timeFieldVariants } from './variants';
