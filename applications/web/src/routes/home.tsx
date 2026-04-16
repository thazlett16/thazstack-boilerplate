import { createFileRoute } from '@tanstack/react-router';

import { NumberField } from '#src/common/components/ui/number-field';
import { TextField } from '#src/common/components/ui/text-field';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="flex flex-col gap-3 max-w-xs">
        <TextField label="Test Text Field" />
        <NumberField label="Test Number Field" />
      </div>
    </div>
  );
}
