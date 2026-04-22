import { createFileRoute } from '@tanstack/react-router';

import { Card } from '#src/common/components/card';
import { NumberField } from '#src/common/components/number-field';
import { Surface } from '#src/common/components/surface';

export const Route = createFileRoute('/number-field')({
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
      <span className="text-muted-foreground w-20 shrink-0 pt-3 text-xs">{label}</span>
      <div className="flex flex-1 flex-wrap gap-4">{children}</div>
    </div>
  );
}

function SampleField(
  props: Omit<React.ComponentProps<typeof NumberField>, 'children'> & {
    label?: string;
    description?: string;
    error?: string;
  },
) {
  const { label = 'Quantity', description, error, ...rest } = props;
  return (
    <NumberField
      className="w-48"
      {...rest}
    >
      <NumberField.FieldLabelInputContainer>
        <NumberField.Label>{label}</NumberField.Label>
        <NumberField.Group>
          <NumberField.Input placeholder="0" />
          <NumberField.StepButtons>
            <NumberField.IncrementButton />
            <NumberField.DecrementButton />
          </NumberField.StepButtons>
        </NumberField.Group>
      </NumberField.FieldLabelInputContainer>
      {description && <NumberField.Description>{description}</NumberField.Description>}
      {error && <NumberField.FieldError>{error}</NumberField.FieldError>}
    </NumberField>
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
          <NumberField className="w-48">
            <NumberField.FieldLabelInputContainer>
              <NumberField.Label>Quantity</NumberField.Label>
              <NumberField.Group>
                <NumberField.Input placeholder="0" />
                <NumberField.StepButtons>
                  <NumberField.IncrementButton />
                  <NumberField.DecrementButton />
                </NumberField.StepButtons>
              </NumberField.Group>
            </NumberField.FieldLabelInputContainer>
            <NumberField.Description>Number of items to order.</NumberField.Description>
          </NumberField>

          <NumberField
            className="w-48"
            formatOptions={{ style: 'currency', currency: 'USD' }}
          >
            <NumberField.FieldLabelInputContainer>
              <NumberField.Label>Price</NumberField.Label>
              <NumberField.Group>
                <NumberField.Input placeholder="0.00" />
                <NumberField.StepButtons>
                  <NumberField.IncrementButton />
                  <NumberField.DecrementButton />
                </NumberField.StepButtons>
              </NumberField.Group>
            </NumberField.FieldLabelInputContainer>
            <NumberField.Description>Formatted as USD currency.</NumberField.Description>
          </NumberField>
        </div>
      </section>

      {/* States */}
      <section>
        <SectionLabel>States</SectionLabel>
        <div className="flex flex-col gap-5">
          <FieldRow label="default">
            <SampleField defaultValue={5} />
          </FieldRow>

          <FieldRow label="error">
            <SampleField
              isInvalid
              defaultValue={-1}
              error="Value must be 0 or greater."
            />
            <SampleField
              isInvalid
              defaultValue={-1}
              description="Must be a positive number."
              error="Value must be 0 or greater."
            />
          </FieldRow>

          <FieldRow label="error + required">
            <SampleField
              isInvalid
              isRequired
              error="This field is required."
            />
          </FieldRow>

          <FieldRow label="error + disabled">
            <SampleField
              isInvalid
              isDisabled
              defaultValue={-1}
              error="Value must be 0 or greater."
            />
          </FieldRow>

          <FieldRow label="disabled">
            <SampleField
              isDisabled
              defaultValue={10}
            />
          </FieldRow>

          <FieldRow label="readonly">
            <SampleField
              isReadOnly
              value={42}
            />
          </FieldRow>

          <FieldRow label="required">
            <SampleField isRequired />
          </FieldRow>

          <FieldRow label="min / max">
            <NumberField
              className="w-48"
              minValue={0}
              maxValue={100}
              defaultValue={50}
            >
              <NumberField.FieldLabelInputContainer>
                <NumberField.Label>Percentage</NumberField.Label>
                <NumberField.Group>
                  <NumberField.Input placeholder="0" />
                  <NumberField.StepButtons>
                    <NumberField.IncrementButton />
                    <NumberField.DecrementButton />
                  </NumberField.StepButtons>
                </NumberField.Group>
              </NumberField.FieldLabelInputContainer>
              <NumberField.Description>Clamped between 0 and 100.</NumberField.Description>
            </NumberField>
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
              <Card.Title>Order details</Card.Title>
              <Card.Description>Adjust quantities before checkout.</Card.Description>
            </Card.Header>
            <Card.Content className="flex flex-col gap-5">
              <NumberField minValue={1}>
                <NumberField.FieldLabelInputContainer>
                  <NumberField.Label>Quantity</NumberField.Label>
                  <NumberField.Group>
                    <NumberField.Input placeholder="1" />
                    <NumberField.StepButtons>
                      <NumberField.IncrementButton />
                      <NumberField.DecrementButton />
                    </NumberField.StepButtons>
                  </NumberField.Group>
                </NumberField.FieldLabelInputContainer>
              </NumberField>
              <NumberField formatOptions={{ style: 'currency', currency: 'USD' }}>
                <NumberField.FieldLabelInputContainer>
                  <NumberField.Label>Discount</NumberField.Label>
                  <NumberField.Group>
                    <NumberField.Input placeholder="0.00" />
                    <NumberField.StepButtons>
                      <NumberField.IncrementButton />
                      <NumberField.DecrementButton />
                    </NumberField.StepButtons>
                  </NumberField.Group>
                </NumberField.FieldLabelInputContainer>
                <NumberField.Description>Applied to the subtotal.</NumberField.Description>
              </NumberField>
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
              <span className="text-muted-foreground w-20 shrink-0 text-xs">{variant}</span>
              <Surface
                variant={variant}
                className="border-border flex-1 rounded-xl border p-5"
              >
                <SampleField label="Amount" />
              </Surface>
            </div>
          ))}
        </div>
      </section>

      {/* Full width */}
      <section>
        <SectionLabel>Full width</SectionLabel>
        <NumberField
          fullWidth
          minValue={10}
          maxValue={100}
          isInvalid={true}
        >
          <NumberField.FieldLabelInputContainer>
            <NumberField.Label>Target value</NumberField.Label>
            <NumberField.Group>
              <NumberField.Input placeholder="0" />
              <NumberField.StepButtons>
                <NumberField.IncrementButton />
                <NumberField.DecrementButton />
              </NumberField.StepButtons>
            </NumberField.Group>
          </NumberField.FieldLabelInputContainer>
          <NumberField.Description>Sets the upper bound for the calculation.</NumberField.Description>
          <NumberField.FieldError>Error</NumberField.FieldError>
        </NumberField>
      </section>
    </div>
  );
}
