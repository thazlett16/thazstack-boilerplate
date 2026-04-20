import { createFileRoute } from '@tanstack/react-router';

import { TextField } from '#src/common/components/text-field';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="flex flex-col gap-3 max-w-xs">HOME</div>
      <TextField.Root isInvalid={true}>
        <TextField.Label>Test Input</TextField.Label>
        <TextField.Input />
        <TextField.Description>Test Description Input</TextField.Description>
        <TextField.FieldError>Test Error Message</TextField.FieldError>
      </TextField.Root>
      <TextField>
        <TextField.Label>Test Area</TextField.Label>
        <TextField.TextArea />
        <TextField.Description>Test Description Area</TextField.Description>
        <TextField.FieldError>Test Error Message</TextField.FieldError>
      </TextField>
    </div>
  );
}
