import { createFileRoute } from '@tanstack/react-router';

import { Card } from '#src/common/components/card';
import { Surface } from '#src/common/components/surface';

export const Route = createFileRoute('/cards')({
  component: RouteComponent,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-3 text-[0.65rem] font-bold tracking-widest uppercase opacity-40">{children}</p>;
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

function RouteComponent() {
  return (
    <div className="flex max-w-2xl flex-col gap-10 p-8">
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
              <p className="text-muted-foreground mt-0.5 text-xs">+8.2% from last month</p>
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
              <p className="mt-0.5 text-xs opacity-60">3 pending invites</p>
            </Card.Content>
          </Card.Root>

          <Card.Root variant="tertiary">
            <Card.Header>
              <Card.Title>Storage Used</Card.Title>
              <Card.Description>4.2 GB of 10 GB used</Card.Description>
            </Card.Header>
            <Card.Content>
              <div className="bg-border h-1.5 w-full overflow-hidden rounded-full">
                <div className="h-full w-[42%] rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground mt-1.5 text-xs">42% — 5.8 GB remaining</p>
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
                className="text-muted-foreground text-xs font-medium hover:underline"
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
              <p className="text-sm italic opacity-75">
                {'"'}Looks good — just a small nit on line 48, otherwise ship it.{'"'}
              </p>
            </Card.Content>
          </Card.Root>
        </div>
      </section>

      {/* Profile card */}
      <section>
        <SectionLabel>Profile card</SectionLabel>
        <div className="flex max-w-xs flex-col gap-4">
          <Card.Root variant="default">
            <Card.Content>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <span className="text-sm font-bold text-primary">JD</span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">Jordan Davis</p>
                  <p className="text-muted-foreground truncate text-xs">jordan@company.com</p>
                </div>
              </div>
            </Card.Content>
            <Card.Footer>
              <button
                type="button"
                className="text-xs font-medium text-primary hover:underline"
              >
                View profile
              </button>
              <button
                type="button"
                className="text-muted-foreground text-xs font-medium hover:underline"
              >
                Remove
              </button>
            </Card.Footer>
          </Card.Root>
        </div>
      </section>

      {/* Form / action card */}
      <section>
        <SectionLabel>Action card</SectionLabel>
        <div className="flex max-w-sm flex-col gap-4">
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
                  className="border-border placeholder:text-muted-foreground w-full rounded-lg border bg-surface-secondary px-3 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <select className="border-border w-full rounded-lg border bg-surface-secondary px-3 py-1.5 text-sm text-foreground focus:ring-1 focus:ring-primary focus:outline-none">
                  <option>Member</option>
                  <option>Admin</option>
                  <option>Viewer</option>
                </select>
              </div>
            </Card.Content>
            <Card.Footer>
              <button
                type="button"
                className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold transition-opacity hover:opacity-90"
              >
                Send invite
              </button>
              <button
                type="button"
                className="text-muted-foreground text-xs font-medium hover:underline"
              >
                Cancel
              </button>
            </Card.Footer>
          </Card.Root>
        </div>
      </section>

      {/* Settings row card */}
      <section>
        <SectionLabel>Settings cards</SectionLabel>
        <div className="flex max-w-sm flex-col gap-2">
          {[
            { label: 'Email notifications', description: 'Receive updates via email', enabled: true },
            { label: 'Two-factor authentication', description: 'Add an extra layer of security', enabled: false },
            { label: 'Public profile', description: 'Allow others to view your profile', enabled: true },
          ].map(({ label, description, enabled }) => (
            <Card.Root
              key={label}
              variant="secondary"
            >
              <Card.Content>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-muted-foreground mt-0.5 text-xs">{description}</p>
                  </div>
                  <div
                    className={`h-5 w-9 shrink-0 rounded-full transition-colors ${enabled ? 'bg-primary' : 'bg-border'}`}
                  />
                </div>
              </Card.Content>
            </Card.Root>
          ))}
        </div>
      </section>

      {/* Transparent variant */}
      <section>
        <SectionLabel>Transparent variant</SectionLabel>
        <p className="text-muted-foreground mb-3 text-xs">
          No background or border — inherits the parent surface. Useful for nested content areas. The examples below
          show the same card on three different surface depths.
        </p>
        <div className="flex flex-col gap-3">
          {(['default', 'secondary', 'tertiary'] as const).map((bg) => (
            <div
              key={bg}
              className="flex items-start gap-3"
            >
              <span className="text-muted-foreground w-20 shrink-0 pt-3 text-xs">{bg}</span>
              <Surface
                variant={bg}
                className="border-border flex-1 rounded-xl border p-1"
              >
                <Card.Root variant="transparent">
                  <Card.Header>
                    <Card.Title>Nested content</Card.Title>
                    <Card.Description>Transparent card on {bg} surface</Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <p className="text-sm opacity-75">
                      The card has no background of its own — it reads as part of the surrounding surface.
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
              </Surface>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
