import { createFileRoute } from '@tanstack/react-router';

import { Description } from '#src/common/components/description';
import { FieldError } from '#src/common/components/field-error';
import { Input } from '#src/common/components/input';
import { Label } from '#src/common/components/label';
import { TextArea } from '#src/common/components/text-area';
import { TextField } from '#src/common/components/text-field';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="flex flex-col gap-3 max-w-xs">HOME</div>
      <TextField>
        <Label>Test Input</Label>
        <Input />
        <Description>Test Description Input</Description>
        <FieldError>Test Error Message</FieldError>
      </TextField>
      <TextField>
        <Label>Test Area</Label>
        <TextArea />
        <Description>Test Description Area</Description>
        <FieldError>Test Error Message</FieldError>
      </TextField>
    </div>
  );
}
