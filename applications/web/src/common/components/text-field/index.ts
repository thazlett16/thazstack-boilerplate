import { TextField as TextFieldRoot } from './components/text-field';
import { Description } from './components/text-field-description';
import { FieldError } from './components/text-field-field-error';
import { Input } from './components/text-field-input';
import { FieldLabelInputContainer } from './components/text-field-input-label-container';
import { Label } from './components/text-field-label';
import { TextArea } from './components/text-field-text-area';

export const TextField = Object.assign(TextFieldRoot, {
  Root: TextFieldRoot,
  FieldLabelInputContainer: FieldLabelInputContainer,
  Label: Label,
  Input: Input,
  TextArea: TextArea,
  Description: Description,
  FieldError: FieldError,
});

export type { TextFieldProps } from './components/text-field';

export { textFieldVariants } from './variants';
