import type { ReactNode } from 'react';

import { HeadContent, Link, Outlet, createRootRouteWithContext, useMatchRoute } from '@tanstack/react-router';

import { Devtools } from '#src/common/components/devtools';
import type { TanStackRouterContext } from '#src/configs/tanstack-router';

import appCss from '#src/global.css?url';

export const Route = createRootRouteWithContext<TanStackRouterContext>()({
  head: () => {
    return {
      meta: [
        { charSet: 'utf8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: 'Design System' },
      ],
      links: [{ rel: 'stylesheet', href: appCss }],
    };
  },
  component: RootComponent,
});

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { to: '/home', label: 'Home' },
  { to: '/colors', label: 'Colors' },
  { to: '/buttons', label: 'Buttons' },
  { to: '/cards', label: 'Cards' },
  { to: '/surfaces', label: 'Surfaces' },
  { to: '/about', label: 'About' },
] as const;

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  const matchRoute = useMatchRoute();
  const isActive = Boolean(matchRoute({ to }));

  return (
    <Link
      to={to}
      className={
        isActive
          ? 'block text-sm px-2.5 py-1.5 rounded bg-muted text-foreground font-medium'
          : 'block text-sm px-2.5 py-1.5 rounded text-muted-foreground hover:bg-muted hover:text-foreground transition-colors'
      }
    >
      {children}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Root layout
// ---------------------------------------------------------------------------

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="flex min-h-screen">
        <nav className="w-44 shrink-0 border-r border-border flex flex-col p-3 gap-0.5">
          <p className="px-2.5 pt-1 pb-2 text-[0.6rem] font-bold uppercase tracking-widest opacity-30">Design System</p>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
      <Devtools />
    </>
  );
}
