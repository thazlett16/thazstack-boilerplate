import { createFileRoute } from '@tanstack/react-router';

import { Surface } from '#src/common/components/surface';

export const Route = createFileRoute('/surfaces')({
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
      {/* Variant overview */}
      <section>
        <SectionLabel>Variants</SectionLabel>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs text-muted-foreground">default</span>
            <Surface
              variant="default"
              className="flex-1 rounded-xl border border-border p-4"
            >
              <p className="text-sm font-medium">Default surface</p>
              <p className="text-xs opacity-60 mt-0.5">bg-surface-default · the base layer</p>
            </Surface>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs text-muted-foreground">secondary</span>
            <Surface
              variant="secondary"
              className="flex-1 rounded-xl border border-border p-4"
            >
              <p className="text-sm font-medium">Secondary surface</p>
              <p className="text-xs opacity-60 mt-0.5">bg-surface-secondary · slightly recessed</p>
            </Surface>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs text-muted-foreground">tertiary</span>
            <Surface
              variant="tertiary"
              className="flex-1 rounded-xl border border-border p-4"
            >
              <p className="text-sm font-medium">Tertiary surface</p>
              <p className="text-xs opacity-60 mt-0.5">bg-surface-tertiary · deepest layer</p>
            </Surface>
          </div>
        </div>
      </section>

      {/* Stacked / nested layers */}
      <section>
        <SectionLabel>Nested layers</SectionLabel>
        <p className="text-xs text-muted-foreground mb-3">
          Surfaces compose naturally — each step down reads as recessed relative to the one above.
        </p>
        <Surface
          variant="default"
          className="rounded-xl border border-border p-4 flex flex-col gap-3"
        >
          <p className="text-xs font-semibold opacity-50">default</p>
          <Surface
            variant="secondary"
            className="rounded-lg border border-border p-4 flex flex-col gap-3"
          >
            <p className="text-xs font-semibold opacity-50">secondary</p>
            <Surface
              variant="tertiary"
              className="rounded-lg border border-border p-3"
            >
              <p className="text-xs font-semibold opacity-50">tertiary</p>
              <p className="text-xs opacity-60 mt-1">Deepest nesting level</p>
            </Surface>
          </Surface>
        </Surface>
      </section>

      {/* Practical usage */}
      <section>
        <SectionLabel>Sidebar layout</SectionLabel>
        <p className="text-xs text-muted-foreground mb-3">
          A typical two-pane layout using surface layers to create visual hierarchy.
        </p>
        <Surface
          variant="default"
          className="rounded-xl border border-border overflow-hidden flex h-48"
        >
          <Surface
            variant="secondary"
            className="w-36 shrink-0 border-r border-border p-3 flex flex-col gap-1"
          >
            {['Overview', 'Analytics', 'Settings', 'Billing'].map((item) => (
              <button
                key={item}
                type="button"
                className="w-full text-left text-xs px-2 py-1.5 rounded-md text-muted-foreground hover:bg-surface-tertiary hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </Surface>
          <div className="flex-1 p-4">
            <p className="text-sm font-semibold">Overview</p>
            <p className="text-xs text-muted-foreground mt-1">Main content area on default surface</p>
          </div>
        </Surface>
      </section>

      {/* Panel / code block */}
      <section>
        <SectionLabel>Code panel</SectionLabel>
        <Surface
          variant="tertiary"
          className="rounded-xl border border-border p-4"
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-widest opacity-40 mb-2">surfaces.tsx</p>
          <pre className="text-xs font-mono opacity-75 leading-relaxed">{`<Surface variant="default">
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
