import { createFileRoute } from '@tanstack/react-router';

import { Select, SelectItem } from '#src/components/ui/select';
import { TextField } from '#src/components/ui/text-field';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <TextField
        label={'test label'}
        placeholder={'test place'}
      />
      <Select label="Favorite animal">
        <SelectItem>Aardvark</SelectItem>
        <SelectItem>Cat</SelectItem>
        <SelectItem>Dog</SelectItem>
        <SelectItem>Kangaroo</SelectItem>
        <SelectItem>Panda</SelectItem>
        <SelectItem>Snake</SelectItem>
      </Select>
    </>
  );
}
