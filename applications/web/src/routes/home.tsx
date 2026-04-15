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
    <div className="flex flex-col gap-6 p-8 max-w-sm">
      <TextField label={'Test Text Field'} />
      <NumberField label={'Test Number Field'} />

      <Card.Root variant="default">
        <Card.Header>
          <Card.Title>Monthly Revenue</Card.Title>
          <Card.Description>Compared to last 30 days</Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="text-2xl font-bold">$12,540</p>
          <p className="text-xs text-muted-foreground mt-0.5">+8.2% from last month</p>
        </Card.Content>
        <Card.Footer>
          <button type="button" className="text-xs font-medium text-primary hover:underline">View report →</button>
        </Card.Footer>
      </Card.Root>

      <Card.Root variant="secondary">
        <Card.Header>
          <Card.Title>Team Members</Card.Title>
          <Card.Description>Active users this week</Card.Description>
        </Card.Header>
        <Card.Content>
          <p className="text-2xl font-bold">24</p>
          <p className="text-xs mt-0.5 opacity-60">3 pending invites</p>
        </Card.Content>
      </Card.Root>

      <Card.Root variant="tertiary">
        <Card.Header>
          <Card.Title>Storage Used</Card.Title>
          <Card.Description>4.2 GB of 10 GB used</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
            <div className="h-full w-[42%] rounded-full bg-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">42% — 5.8 GB remaining</p>
        </Card.Content>
      </Card.Root>
    </div>
  );
}
