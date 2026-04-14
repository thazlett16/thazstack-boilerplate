import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import tanStackRouterPluginVite from '@tanstack/router-plugin/vite';
import viteJSPluginReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';
import viteTSConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // resolve: {
  //   tsconfigPaths: true,
  // },
  base: '/web-ui',
  plugins: [
    devtools(),
    // Eventually won't need this anymore. Doesn't work in dev though. Eventually should use `outputOptions.preserveModules`
    // https://github.com/vitejs/vite/issues/22047
    viteTSConfigPaths({ projects: ['./tsconfig.json'] }),
    tanStackRouterPluginVite({
      target: 'react',
      autoCodeSplitting: true,
      generatedRouteTree: './src/route-tree.gen.ts',
      routesDirectory: './src/routes',
    }),
    viteJSPluginReact(),
    tailwindcss(),
  ],
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  test: {
    include: ['test/**/*.test.ts'],
    typecheck: {
      enabled: true,
      include: ['test/**/*.test-d.ts'],
    },
  },
});
