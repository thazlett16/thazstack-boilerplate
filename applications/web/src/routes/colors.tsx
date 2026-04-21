import type { CSSProperties } from 'react';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/colors')({
  component: RouteComponent,
});

// ---------------------------------------------------------------------------
// Swatch data
// ---------------------------------------------------------------------------

interface SwatchDef {
  label: string;
  bg: string;
  fg: string;
  hoverBg: string | null;
  /** Whether this color has an inv (tinted/transparent) variant */
  hasInv: boolean;
}

const SWATCHES: SwatchDef[] = [
  { label: 'Primary', bg: '--primary', fg: '--primary-foreground', hoverBg: '--primary-hover', hasInv: true },
  { label: 'Secondary', bg: '--secondary', fg: '--secondary-foreground', hoverBg: '--secondary-hover', hasInv: true },
  { label: 'Success', bg: '--success', fg: '--success-foreground', hoverBg: '--success-hover', hasInv: true },
  { label: 'Warning', bg: '--warning', fg: '--warning-foreground', hoverBg: '--warning-hover', hasInv: true },
  { label: 'Danger', bg: '--danger', fg: '--danger-foreground', hoverBg: '--danger-hover', hasInv: true },

  { label: 'Muted', bg: '--muted', fg: '--muted-foreground', hoverBg: '--muted-hover', hasInv: false },
  { label: 'Background', bg: '--background', fg: '--foreground', hoverBg: null, hasInv: false },
  { label: 'Overlay', bg: '--surface-default', fg: '--surface-default-foreground', hoverBg: null, hasInv: false },
  { label: 'Overlay 2', bg: '--surface-secondary', fg: '--surface-secondary-foreground', hoverBg: null, hasInv: false },
  { label: 'Overlay 3', bg: '--surface-tertiary', fg: '--surface-tertiary-foreground', hoverBg: null, hasInv: false },
];

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

interface SwatchCSSVars extends CSSProperties {
  '--swatch-bg': string;
  '--swatch-fg': string;
  '--swatch-hover'?: string;
}

function ChipPair({
  chipClass,
  hoverChipClass,
  hasHover,
}: {
  chipClass: string;
  hoverChipClass: string;
  hasHover: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <div className={chipClass}>Aa</div>
      {hasHover ? (
        <>
          <span className="text-[0.5rem] opacity-20 select-none">→</span>
          <div className={hoverChipClass} />
        </>
      ) : (
        <div className="w-8" />
      )}
    </div>
  );
}

function SwatchRow({ label, bg, fg, hoverBg, hasInv }: SwatchDef) {
  const cssVars: SwatchCSSVars = {
    '--swatch-bg': `var(${bg})`,
    '--swatch-fg': `var(${fg})`,
    ...(hoverBg ? { '--swatch-hover': `var(${hoverBg})` } : {}),
  };

  return (
    <div
      style={cssVars}
      className="flex items-start gap-2.5"
    >
      <div className="flex shrink-0 flex-col gap-1">
        <ChipPair
          chipClass={`size-9 rounded border border-black/10 flex items-center justify-center text-[0.6rem] font-bold select-none transition-colors duration-150 bg-(--swatch-bg) text-(color:--swatch-fg)${hoverBg ? ' hover:bg-(--swatch-hover) cursor-pointer' : ''}`}
          hoverChipClass="size-5 rounded-sm bg-(--swatch-hover) border border-black/10"
          hasHover={hoverBg !== null}
        />
        {hasInv && (
          <ChipPair
            chipClass="size-9 rounded border border-black/10 flex items-center justify-center text-[0.6rem] font-bold select-none transition-colors duration-150 cursor-pointer bg-[color-mix(in_oklab,var(--swatch-bg)_15%,transparent)] text-(color:--swatch-bg) hover:bg-[color-mix(in_oklab,var(--swatch-bg)_20%,transparent)]"
            hoverChipClass="size-5 rounded-sm border border-black/10 bg-[color-mix(in_oklab,var(--swatch-bg)_20%,transparent)]"
            hasHover
          />
        )}
      </div>

      <div className="min-w-0 pt-1.5">
        <p className="text-[0.72rem] leading-none font-medium">{label}</p>
        <p className="mt-0.5 font-mono text-[0.6rem] leading-none opacity-35">{`var(${bg})`}</p>
      </div>
    </div>
  );
}

function ThemeSwatches({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <div className={`${theme} min-w-60 flex-1 rounded-xl border border-black/10 bg-background p-5 text-foreground`}>
      <p className="mb-3.5 text-[0.65rem] font-bold tracking-widest uppercase opacity-35">{theme} mode</p>
      <div className="flex flex-col gap-2">
        {SWATCHES.map((s) => (
          <SwatchRow
            key={s.label}
            {...s}
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-lg leading-none font-semibold">Colors</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Semantic color tokens — base, hover, and inv (tinted) variants.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <ThemeSwatches theme="light" />
        <ThemeSwatches theme="dark" />
      </div>
    </div>
  );
}
