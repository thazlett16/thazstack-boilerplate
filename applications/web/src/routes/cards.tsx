import { createFileRoute } from '@tanstack/react-router';

import { Card } from '#src/common/components/card';

export const Route = createFileRoute('/cards')({
  component: RouteComponent,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: string }) {
  return <p className="text-[0.65rem] font-bold uppercase tracking-widest opacity-40 mb-3">{children}</p>;
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

function RouteComponent() {
  return (
    <div className="flex flex-col gap-10 p-8 max-w-2xl">
      {/* Stat cards */}
      <section>
        <SectionLabel>Stat cards</SectionLabel>
        <div className="flex flex-col gap-4">
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
              <button
                type="button"
                className="text-xs font-medium text-primary hover:underline"
              >
                View report →
              </button>
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
      </section>

      {/* Notification / list cards */}
      <section>
        <SectionLabel>Notification cards</SectionLabel>
        <div className="flex flex-col gap-4">
          <Card.Root variant="default">
            <Card.Header>
              <Card.Title>Deployment complete</Card.Title>
              <Card.Description>Production · 2 minutes ago</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm opacity-75">
                Version 2.4.1 was successfully deployed with no errors. All health checks passed.
              </p>
            </Card.Content>
            <Card.Footer>
              <button
                type="button"
                className="text-xs font-medium text-primary hover:underline"
              >
                View deployment
              </button>
              <button
                type="button"
                className="text-xs font-medium text-muted-foreground hover:underline"
              >
                Dismiss
              </button>
            </Card.Footer>
          </Card.Root>

          <Card.Root variant="secondary">
            <Card.Header>
              <Card.Title>New comment</Card.Title>
              <Card.Description>Jordan left a comment on PR #142</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm opacity-75 italic">
                {'"'}Looks good — just a small nit on line 48, otherwise ship it.{'"'}
              </p>
            </Card.Content>
          </Card.Root>
        </div>
      </section>

      {/* Form / action card */}
      <section>
        <SectionLabel>Action card</SectionLabel>
        <div className="flex flex-col gap-4 max-w-sm">
          <Card.Root variant="default">
            <Card.Header>
              <Card.Title>Invite team member</Card.Title>
              <Card.Description>They will receive an email to join your workspace</Card.Description>
            </Card.Header>
            <Card.Content>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="colleague@company.com"
                  className="w-full rounded-lg border border-border bg-surface-secondary px-3 py-1.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <select className="w-full rounded-lg border border-border bg-surface-secondary px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>Member</option>
                  <option>Admin</option>
                  <option>Viewer</option>
                </select>
              </div>
            </Card.Content>
            <Card.Footer>
              <button
                type="button"
                className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold  hover:opacity-90 transition-opacity"
              >
                Send invite
              </button>
              <button
                type="button"
                className="text-xs font-medium text-muted-foreground hover:underline"
              >
                Cancel
              </button>
            </Card.Footer>
          </Card.Root>
        </div>
      </section>

      {/* Transparent variant */}
      <section>
        <SectionLabel>Transparent variant</SectionLabel>
        <p className="text-xs text-muted-foreground mb-3">
          No background or border — inherits the parent surface. Useful for nested content areas.
        </p>
        <div className="flex flex-col gap-4 max-w-sm">
          <Card.Root variant="transparent">
            <Card.Header>
              <Card.Title>Nested content</Card.Title>
              <Card.Description>This card has no background of its own</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm opacity-75">
                The transparent variant strips all surface styling so the card structure and spacing can be reused
                inside an existing surface layer.
              </p>
            </Card.Content>
            <Card.Footer>
              <button
                type="button"
                className="text-xs font-medium text-primary hover:underline"
              >
                Learn more
              </button>
            </Card.Footer>
          </Card.Root>
        </div>
      </section>
    </div>
  );
}
