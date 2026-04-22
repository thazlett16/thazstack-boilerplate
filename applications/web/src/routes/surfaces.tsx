import { createFileRoute } from '@tanstack/react-router';

import { Surface } from '#src/common/components/surface';

export const Route = createFileRoute('/surfaces')({
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
      {/* Variant overview */}
      <section>
        <SectionLabel>Variants</SectionLabel>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs text-muted-foreground">default</span>
            <Surface
              variant="default"
              className="border-border flex-1 rounded-xl border p-4"
            >
              <p className="text-sm font-medium">Default surface</p>
              <p className="mt-0.5 text-xs opacity-60">bg-surface-default · the base layer</p>
            </Surface>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs text-muted-foreground">secondary</span>
            <Surface
              variant="secondary"
              className="border-border flex-1 rounded-xl border p-4"
            >
              <p className="text-sm font-medium">Secondary surface</p>
              <p className="mt-0.5 text-xs opacity-60">bg-surface-secondary · slightly recessed</p>
            </Surface>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs text-muted-foreground">tertiary</span>
            <Surface
              variant="tertiary"
              className="border-border flex-1 rounded-xl border p-4"
            >
              <p className="text-sm font-medium">Tertiary surface</p>
              <p className="mt-0.5 text-xs opacity-60">bg-surface-tertiary · deepest layer</p>
            </Surface>
          </div>
        </div>
      </section>

      {/* Stacked / nested layers */}
      <section>
        <SectionLabel>Nested layers</SectionLabel>
        <p className="mb-3 text-xs text-muted-foreground">
          Surfaces compose naturally — each step down reads as recessed relative to the one above.
        </p>
        <Surface
          variant="default"
          className="border-border flex flex-col gap-3 rounded-xl border p-4"
        >
          <p className="text-xs font-semibold opacity-50">default</p>
          <Surface
            variant="secondary"
            className="border-border flex flex-col gap-3 rounded-lg border p-4"
          >
            <p className="text-xs font-semibold opacity-50">secondary</p>
            <Surface
              variant="tertiary"
              className="border-border rounded-lg border p-3"
            >
              <p className="text-xs font-semibold opacity-50">tertiary</p>
              <p className="mt-1 text-xs opacity-60">Deepest nesting level</p>
            </Surface>
          </Surface>
        </Surface>
      </section>

      {/* Practical usage */}
      <section>
        <SectionLabel>Sidebar layout</SectionLabel>
        <p className="mb-3 text-xs text-muted-foreground">
          A typical two-pane layout using surface layers to create visual hierarchy.
        </p>
        <Surface
          variant="default"
          className="border-border flex h-48 overflow-hidden rounded-xl border"
        >
          <Surface
            variant="secondary"
            className="border-border flex w-36 shrink-0 flex-col gap-1 border-r p-3"
          >
            {['Overview', 'Analytics', 'Settings', 'Billing'].map((item) => (
              <button
                key={item}
                type="button"
                className="w-full rounded-md px-2 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:bg-surface-tertiary hover:text-foreground"
              >
                {item}
              </button>
            ))}
          </Surface>
          <div className="flex-1 p-4">
            <p className="text-sm font-semibold">Overview</p>
            <p className="mt-1 text-xs text-muted-foreground">Main content area on default surface</p>
          </div>
        </Surface>
      </section>

      {/* Panel / code block */}
      <section>
        <SectionLabel>Code panel</SectionLabel>
        <Surface
          variant="tertiary"
          className="border-border rounded-xl border p-4"
        >
          <p className="mb-2 text-[0.65rem] font-bold tracking-widest uppercase opacity-40">surfaces.tsx</p>
          <pre className="font-mono text-xs leading-relaxed opacity-75">{`<Surface variant="default">
  <Surface variant="secondary">
    <Surface variant="tertiary">
      deepest layer
    </Surface>
  </Surface>
</Surface>`}</pre>
        </Surface>
      </section>
    </div>
  );
}
