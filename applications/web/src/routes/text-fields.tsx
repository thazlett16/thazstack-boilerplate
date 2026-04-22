import { createFileRoute } from '@tanstack/react-router';

import { Card } from '#src/common/components/card';
import { Surface } from '#src/common/components/surface';
import { TextField } from '#src/common/components/text-field';

export const Route = createFileRoute('/text-fields')({
  component: RouteComponent,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-4 text-[0.65rem] font-bold tracking-widest uppercase opacity-40">{children}</p>;
}

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-20 shrink-0 pt-3 text-xs text-muted-foreground">{label}</span>
      <div className="flex flex-1 flex-wrap gap-4">{children}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

function RouteComponent() {
  return (
    <div className="flex max-w-3xl flex-col gap-12 p-8">
      {/* Default */}
      <section>
        <SectionLabel>Default</SectionLabel>
        <div className="flex flex-wrap gap-6">
          <TextField className="w-64">
            <TextField.LabelInputContainer>
              <TextField.Label>Full name</TextField.Label>
              <TextField.Input placeholder="Jane Smith" />
            </TextField.LabelInputContainer>
            <TextField.Description>Used on your public profile.</TextField.Description>
          </TextField>

          <TextField className="w-64">
            <TextField.LabelInputContainer>
              <TextField.Label>Bio</TextField.Label>
              <TextField.TextArea placeholder="Tell us about yourself…" />
            </TextField.LabelInputContainer>
            <TextField.Description>Shown below your display name.</TextField.Description>
          </TextField>
        </div>
      </section>

      {/* States — input */}
      <section>
        <SectionLabel>States — input</SectionLabel>
        <div className="flex flex-col gap-5">
          <FieldRow label="default">
            <TextField className="w-64">
              <TextField.LabelInputContainer>
                <TextField.Label>Email</TextField.Label>
                <TextField.Input placeholder="you@example.com" />
              </TextField.LabelInputContainer>
              <TextField.Description>{"We'll never share your email."}</TextField.Description>
            </TextField>
          </FieldRow>

          <FieldRow label="error">
            <TextField
              isInvalid
              className="w-64"
            >
              <TextField.LabelInputContainer>
                <TextField.Label>Email</TextField.Label>
                <TextField.Input placeholder="you@example.com" />
              </TextField.LabelInputContainer>
              <TextField.Description>{"We'll never share your email."}</TextField.Description>
              <TextField.FieldError>Please enter a valid email address.</TextField.FieldError>
            </TextField>
          </FieldRow>

          <FieldRow label="disabled">
            <TextField
              isDisabled
              className="w-64"
            >
              <TextField.LabelInputContainer>
                <TextField.Label>Email</TextField.Label>
                <TextField.Input
                  placeholder="you@example.com"
                  value="jane@example.com"
                />
              </TextField.LabelInputContainer>
              <TextField.Description>{"We'll never share your email."}</TextField.Description>
            </TextField>
          </FieldRow>

          <FieldRow label="readonly">
            <TextField
              isReadOnly
              className="w-64"
            >
              <TextField.LabelInputContainer>
                <TextField.Label>Email</TextField.Label>
                <TextField.Input value="jane@example.com" />
              </TextField.LabelInputContainer>
              <TextField.Description>Contact support to change this.</TextField.Description>
            </TextField>
          </FieldRow>

          <FieldRow label="required">
            <TextField
              isRequired
              className="w-64"
            >
              <TextField.LabelInputContainer>
                <TextField.Label>Email</TextField.Label>
                <TextField.Input placeholder="you@example.com" />
              </TextField.LabelInputContainer>
              <TextField.Description>Required to create your account.</TextField.Description>
            </TextField>
          </FieldRow>
        </div>
      </section>

      {/* States — textarea */}
      <section>
        <SectionLabel>States — textarea</SectionLabel>
        <div className="flex flex-col gap-5">
          <FieldRow label="default">
            <TextField className="w-64">
              <TextField.LabelInputContainer>
                <TextField.Label>Notes</TextField.Label>
                <TextField.TextArea placeholder="Add any additional notes…" />
              </TextField.LabelInputContainer>
              <TextField.Description>Optional — visible only to you.</TextField.Description>
            </TextField>
          </FieldRow>

          <FieldRow label="error">
            <TextField
              isInvalid
              className="w-64"
            >
              <TextField.LabelInputContainer>
                <TextField.Label>Notes</TextField.Label>
                <TextField.TextArea placeholder="Add any additional notes…" />
              </TextField.LabelInputContainer>
              <TextField.Description>Optional — visible only to you.</TextField.Description>
              <TextField.FieldError>Notes cannot exceed 500 characters.</TextField.FieldError>
            </TextField>
          </FieldRow>

          <FieldRow label="disabled">
            <TextField
              isDisabled
              className="w-64"
            >
              <TextField.LabelInputContainer>
                <TextField.Label>Notes</TextField.Label>
                <TextField.TextArea defaultValue="Editing is currently locked." />
              </TextField.LabelInputContainer>
            </TextField>
          </FieldRow>

          <FieldRow label="readonly">
            <TextField
              isReadOnly
              className="w-64"
            >
              <TextField.LabelInputContainer>
                <TextField.Label>Notes</TextField.Label>
                <TextField.TextArea value="This record has been archived." />
              </TextField.LabelInputContainer>
              <TextField.Description>Contact support to edit archived records.</TextField.Description>
            </TextField>
          </FieldRow>
        </div>
      </section>

      {/* In a card */}
      <section>
        <SectionLabel>In a card</SectionLabel>
        <div className="flex flex-wrap gap-4">
          <Card.Root
            variant="default"
            className="w-80"
          >
            <Card.Header>
              <Card.Title>Profile</Card.Title>
              <Card.Description>Update your public profile information.</Card.Description>
            </Card.Header>
            <Card.Content className="flex flex-col gap-5">
              <TextField>
                <TextField.LabelInputContainer>
                  <TextField.Label>Display name</TextField.Label>
                  <TextField.Input placeholder="Jane Smith" />
                </TextField.LabelInputContainer>
              </TextField>
              <TextField>
                <TextField.LabelInputContainer>
                  <TextField.Label>Username</TextField.Label>
                  <TextField.Input placeholder="janesmith" />
                </TextField.LabelInputContainer>
                <TextField.Description>Your @handle visible to others.</TextField.Description>
              </TextField>
              <TextField>
                <TextField.LabelInputContainer>
                  <TextField.Label>Bio</TextField.Label>
                  <TextField.TextArea placeholder="Tell us about yourself…" />
                </TextField.LabelInputContainer>
                <TextField.Description>Max 160 characters.</TextField.Description>
              </TextField>
            </Card.Content>
          </Card.Root>

          <Card.Root
            variant="default"
            className="w-80"
          >
            <Card.Header>
              <Card.Title>Sign in</Card.Title>
              <Card.Description>Enter your credentials to continue.</Card.Description>
            </Card.Header>
            <Card.Content className="flex flex-col gap-5">
              <TextField isRequired={true}>
                <TextField.LabelInputContainer>
                  <TextField.Label>Email</TextField.Label>
                  <TextField.Input
                    type="email"
                    placeholder="you@example.com"
                  />
                </TextField.LabelInputContainer>
              </TextField>
              <TextField
                isRequired={true}
                isInvalid={true}
              >
                <TextField.LabelInputContainer>
                  <TextField.Label>Password</TextField.Label>
                  <TextField.Input
                    type="password"
                    placeholder="••••••••"
                  />
                </TextField.LabelInputContainer>
                <TextField.FieldError>Incorrect password. Please try again.</TextField.FieldError>
              </TextField>
            </Card.Content>
          </Card.Root>
        </div>
      </section>

      {/* On different surfaces */}
      <section>
        <SectionLabel>On different surfaces</SectionLabel>
        <div className="flex flex-col gap-3">
          {(['default', 'secondary', 'tertiary'] as const).map((variant) => (
            <div
              key={variant}
              className="flex items-center gap-3"
            >
              <span className="w-20 shrink-0 text-xs text-muted-foreground">{variant}</span>
              <Surface
                variant={variant}
                className="border-border flex-1 rounded-xl border p-5"
              >
                <TextField className="max-w-xs">
                  <TextField.LabelInputContainer>
                    <TextField.Label>Search</TextField.Label>
                    <TextField.Input placeholder="Type to search…" />
                  </TextField.LabelInputContainer>
                </TextField>
              </Surface>
            </div>
          ))}
        </div>
      </section>

      {/* Full width */}
      <section>
        <SectionLabel>Full width</SectionLabel>
        <div className="flex flex-col gap-5">
          <TextField>
            <TextField.LabelInputContainer>
              <TextField.Label>Subject</TextField.Label>
              <TextField.Input placeholder="What's this about?" />
            </TextField.LabelInputContainer>
          </TextField>
          <TextField>
            <TextField.LabelInputContainer>
              <TextField.Label>Message</TextField.Label>
              <TextField.TextArea placeholder="Write your message…" />
            </TextField.LabelInputContainer>
            <TextField.Description>{"We'll respond within 2 business days."}</TextField.Description>
          </TextField>
        </div>
      </section>
    </div>
  );
}
