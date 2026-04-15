import { createFileRoute } from '@tanstack/react-router';

import { NumberField } from '#src/common/components/ui/number-field';
// import { TextField } from '#src/common/components/ui/text-field';
import { Card } from '#src/common/components/card';
import { TextField } from '#src/common/components/ui/text-field';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      TEST HOME
      <TextField label={'Test Text Field'} />
      <NumberField label={'Test Number Field'} />
      <Card.Root>
        <Card.Header>asdf</Card.Header>
        <Card.Content>asdf</Card.Content>
        <Card.Footer>adsf</Card.Footer>
      </Card.Root>
    </>
  );
}
