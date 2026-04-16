import { DateFieldContextProvider } from './components/date-field-context-provider';
import { DateFieldInput } from './components/date-field-input';
import { DateFieldRoot } from './components/date-field-root';
import { DateFieldSegment } from './components/date-field-segment';

export const DateField = Object.assign(DateFieldRoot, {
  Root: DateFieldRoot,
  Input: DateFieldInput,
  Segment: DateFieldSegment,
  Provider: DateFieldContextProvider,
});

export type { DateFieldContextProviderProps } from './components/date-field-context-provider';
export type { DateFieldInputProps } from './components/date-field-input';
export type { DateFieldRootProps } from './components/date-field-root';
export type { DateFieldSegmentProps } from './components/date-field-segment';

export { useDateFieldContext } from './context';

export type { DateFieldVariants } from './variants';
export { dateFieldVariants } from './variants';
