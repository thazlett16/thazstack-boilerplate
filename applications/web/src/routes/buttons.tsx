import { createFileRoute } from '@tanstack/react-router';

import { Button } from '#src/common/components/button';

export const Route = createFileRoute('/buttons')({
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
      {/* Color variants */}
      <section>
        <SectionLabel>Color variants</SectionLabel>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <SectionLabel>Sizes</SectionLabel>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            size="sm"
          >
            Small
          </Button>
          <Button
            variant="primary"
            size="md"
          >
            Medium
          </Button>
          <Button
            variant="primary"
            size="lg"
          >
            Large
          </Button>
        </div>
      </section>

      {/* Sizes × variants */}
      <section>
        <SectionLabel>Sizes × variants</SectionLabel>
        <div className="flex flex-col gap-3">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div
              key={size}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="w-6 shrink-0 text-xs text-muted-foreground">{size}</span>
              {(['primary', 'secondary', 'danger', 'success', 'warning', 'ghost', 'outline'] as const).map(
                (variant) => (
                  <Button
                    key={variant}
                    variant={variant}
                    size={size}
                  >
                    {variant}
                  </Button>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Disabled state */}
      <section>
        <SectionLabel>Disabled</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {(['primary', 'secondary', 'danger', 'success', 'warning', 'ghost', 'outline'] as const).map((variant) => (
            <Button
              key={variant}
              variant={variant}
              isDisabled
            >
              {variant}
            </Button>
          ))}
        </div>
      </section>

      {/* Pending / loading state */}
      <section>
        <SectionLabel>Pending (loading)</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {(['primary', 'secondary', 'danger', 'success', 'warning', 'ghost', 'outline'] as const).map((variant) => (
            <Button
              key={variant}
              variant={variant}
              isPending
            >
              {variant}
            </Button>
          ))}
        </div>
      </section>

      {/* Inverted */}
      <section>
        <SectionLabel>Inverted</SectionLabel>
        <p className="mb-3 text-xs text-muted-foreground">
          Tinted background with the color as text — useful on coloured or image surfaces.
        </p>
        <div className="flex flex-wrap gap-3">
          {(['primary', 'secondary', 'danger', 'success', 'warning'] as const).map((variant) => (
            <Button
              key={variant}
              variant={variant}
              isInverted
            >
              {variant}
            </Button>
          ))}
        </div>
      </section>

      {/* Inverted disabled */}
      <section>
        <SectionLabel>Inverted disabled</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {(['primary', 'secondary', 'danger', 'success', 'warning'] as const).map((variant) => (
            <Button
              key={variant}
              variant={variant}
              isInverted
              isDisabled
            >
              {variant}
            </Button>
          ))}
        </div>
      </section>

      {/* Icon-only (square) */}
      <section>
        <SectionLabel>Icon only</SectionLabel>
        <div className="flex flex-wrap items-center gap-3">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Button
              key={size}
              variant="primary"
              size={size}
              aria-label="Add item"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2Z" />
              </svg>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
