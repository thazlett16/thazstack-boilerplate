import { Outlet, createRootRouteWithContext, HeadContent } from '@tanstack/react-router';

import type { TanStackRouterContext } from '#src/configs/tanstack-router';

import { Devtools } from '#src/common/components/devtools';

import appCss from '#src/global.css?url';

export const Route = createRootRouteWithContext<TanStackRouterContext>()({
  head: () => {
    return {
      meta: [
        {
          charSet: 'utf8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          title: 'Test Application',
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href: appCss,
        },
      ],
    };
  },
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div>/__root</div>
      <Outlet />
      <Devtools />
    </>
  );
}
