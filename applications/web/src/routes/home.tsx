import { createFileRoute } from '@tanstack/react-router';

import { TextField } from '#src/common/components/text-field';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="flex max-w-xs flex-col gap-3">HOME</div>
      <TextField isInvalid={true}>
        <TextField.FieldLabelInputContainer>
          <TextField.Label>Test Input</TextField.Label>
          <TextField.Input placeholder="Test Input Placeholder" />
        </TextField.FieldLabelInputContainer>
        <TextField.Description>Test Description Input</TextField.Description>
        <TextField.FieldError>Test Error Message</TextField.FieldError>
      </TextField>

      <TextField isInvalid={true}>
        <TextField.FieldLabelInputContainer>
          <TextField.Label>Test Area</TextField.Label>
          <TextField.TextArea placeholder="Test Area Placeholder" />
        </TextField.FieldLabelInputContainer>
        <TextField.Description>Test Description Area</TextField.Description>
        <TextField.FieldError>Test Error Message</TextField.FieldError>
      </TextField>
    </div>
  );
}
