import { defineConfig as oxlintDefineConfig } from 'oxlint';
import { defineConfig } from 'vite-plus';

// These oxlint Configs are just here till I inline it all or package a separate config for it. I like a strict config to point AI in right direction. Might update this in future though.
export const baseConfig = oxlintDefineConfig({
  categories: {
    correctness: 'error',
    suspicious: 'error',
    perf: 'error',
    restriction: 'off',
    pedantic: 'off',
    style: 'off',
    nursery: 'off',
  },
  env: {
    builtin: true,
    browser: true,
    es2023: true,
    node: true,
  },
});

const eslintConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules

    // Restriction Rules
    'eslint/class-methods-use-this': 'error',
    'eslint/default-case': 'error',
    'eslint/no-alert': 'error',
    'eslint/no-bitwise': 'error',
    'eslint/no-console': [
      'error',
      {
        allow: ['error', 'warn'],
      },
    ],
    'eslint/no-div-regex': 'error',
    'eslint/no-empty': 'error',
    'eslint/no-empty-function': 'error',
    'eslint/no-eq-null': 'error',
    'eslint/no-iterator': 'error',
    'eslint/no-param-reassign': 'error',
    'eslint/no-plusplus': 'error',
    'eslint/no-proto': 'error',
    'eslint/no-regex-spaces': 'error',
    'eslint/no-sequences': 'error',
    'eslint/no-var': 'error',
    'eslint/no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'eslint/unicode-bom': 'error',

    // Pedantic Rules
    'eslint/accessor-pairs': 'error',
    'eslint/array-callback-return': 'error',
    'eslint/no-array-constructor': 'error',
    'eslint/no-case-declarations': 'error',
    'eslint/no-constructor-return': 'error',
    'eslint/no-else-return': 'error',
    'eslint/no-fallthrough': 'error',
    'eslint/no-inner-declarations': 'error',
    'eslint/no-lonely-if': 'error',
    'eslint/no-loop-func': 'error',
    'eslint/no-negated-condition': 'error',
    'eslint/no-new-wrappers': 'error',
    'eslint/no-object-constructor': 'error',
    'eslint/no-promise-executor-return': 'error',
    'eslint/no-prototype-builtins': 'error',
    'eslint/no-redeclare': 'error',
    'eslint/no-self-compare': 'error',
    'eslint/no-useless-return': 'error',
    'eslint/radix': 'error',
    'eslint/symbol-description': 'error',

    // Style Rules
    'eslint/curly': 'error',
    'eslint/default-case-last': 'error',
    'eslint/default-param-last': 'error',
    'eslint/func-names': 'error',
    'eslint/grouped-accessor-pairs': 'error',
    'eslint/guard-for-in': 'error',
    'eslint/no-extra-label': 'error',
    'eslint/no-implicit-coercion': 'error',
    'eslint/no-label-var': 'error',
    'eslint/no-lone-blocks': 'error',
    'eslint/no-multi-assign': 'error',
    'eslint/no-new-func': 'error',
    'eslint/no-return-assign': 'error',
    'eslint/no-script-url': 'error',
    'eslint/no-useless-computed-key': 'error',
    'eslint/operator-assignment': 'error',
    'eslint/prefer-destructuring': 'error',
    'eslint/prefer-exponentiation-operator': 'error',
    'eslint/prefer-numeric-literals': 'error',
    'eslint/prefer-object-has-own': 'error',
    'eslint/prefer-object-spread': 'error',
    'eslint/prefer-promise-reject-errors': 'error',
    'eslint/prefer-rest-params': 'error',
    'eslint/prefer-template': 'error',
  },
});

const importConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['import'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css'],
      },
    ],

    // Perf Rules
    // Restriction Rules
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // Pedantic Rules
    // Style Rules
    'import/consistent-type-specifier-style': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
  },
});

const jsdocConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['jsdoc'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules
    // Restriction Rules
    'jsdoc/check-access': 'error',
    'jsdoc/empty-tags': 'error',

    // Pedantic Rules
    // Style Rules
  },
});

const jsxA11yConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['jsx-a11y'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules
    // Restriction Rules
    // Pedantic Rules
    // Style Rules
  },
});

const nodeConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['node'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules
    // Restriction Rules
    'node/no-process-env': 'error',

    // Pedantic Rules
    // Style Rules
  },
});

const oxcConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['oxc'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules
    // Restriction Rules

    // Pedantic Rules
    'oxc/no-barrel-file': 'error',

    // Style Rules
  },
});

const promiseConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['promise'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules
    // Restriction Rules
    'promise/catch-or-return': 'error',
    'promise/spec-only': 'error',

    // Pedantic Rules
    // Style Rules
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-catch': 'error',
  },
});

const reactConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['react', 'react-perf'],
  rules: {
    // Correctness Rules
    'react/no-children-prop': 'off',

    // Suspicious Rules
    'react/react-in-jsx-scope': 'off',

    // Perf Rules
    'react-perf/jsx-no-jsx-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',

    // Restriction Rules
    'react/button-has-type': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/no-danger': 'error',
    'react/no-unknown-property': 'error',
    'react/only-export-components': 'error',

    // Pedantic Rules
    'react/checked-requires-onchange-or-readonly': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-unescaped-entities': 'error',
    'react/rules-of-hooks': 'error',

    // Style Rules
    'react/jsx-fragments': 'error',
    'react/jsx-pascal-case': 'error',
    'react/self-closing-comp': 'error',
  },
});

const typescriptConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules

    // Restriction Rules
    'typescript/no-dynamic-delete': 'error',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-asserted-nullish-coalescing': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-require-imports': 'error',
    'typescript/non-nullable-type-assertion-style': 'error',
    'typescript/promise-function-async': 'error',
    'typescript/use-unknown-in-catch-callback-variable': 'error',

    // Pedantic Rules
    'typescript/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 10,
      },
    ],
    'typescript/ban-types': 'error',
    'typescript/no-confusing-void-expression': 'error',
    'typescript/no-deprecated': 'error',
    'typescript/no-misused-promises': 'error',
    'typescript/no-unsafe-argument': 'error',
    'typescript/no-unsafe-assignment': 'error',
    'typescript/no-unsafe-call': 'error',
    'typescript/no-unsafe-function-type': 'error',
    'typescript/no-unsafe-member-access': 'error',
    'typescript/no-unsafe-return': 'error',
    'typescript/prefer-nullish-coalescing': 'error',
    'typescript/prefer-promise-reject-errors': 'error',
    'typescript/prefer-ts-expect-error': 'error',
    'typescript/related-getter-setter-pairs': 'error',
    'typescript/require-await': 'error',
    'typescript/restrict-plus-operands': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
      },
    ],
    'typescript/return-await': ['error', 'always'],
    'typescript/switch-exhaustiveness-check': [
      'error',
      {
        considerDefaultExhaustiveForUnions: true,
      },
    ],

    // Style Rules
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/array-type': 'error',
    'typescript/ban-tslint-comment': 'error',
    'typescript/consistent-generic-constructors': 'error',
    'typescript/consistent-indexed-object-style': 'error',
    'typescript/consistent-type-definitions': 'error',
    'typescript/consistent-type-imports': 'error',
    'typescript/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'typescript/no-inferrable-types': 'error',
    'typescript/prefer-for-of': 'error',
    'typescript/prefer-function-type': 'error',
    'typescript/prefer-optional-chain': 'error',
    'typescript/prefer-reduce-type-parameter': 'error',
    'typescript/prefer-return-this-type': 'error',
  },
});

const unicornConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules

    // Restriction Rules
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-anonymous-default-export': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-length-as-slice-end': 'error',
    'unicorn/no-magic-array-flat-depth': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-useless-error-capture-stack-trace': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',

    // Pedantic Rules
    'unicorn/consistent-assert': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-immediate-mutation': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-negation-in-equality-check': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-unnecessary-array-flat-depth': 'error',
    'unicorn/no-unnecessary-array-splice-count': 'error',
    'unicorn/no-unnecessary-slice-end': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-math-min-max': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    // Style Rules
    'unicorn/consistent-date-clone': 'error',
    'unicorn/consistent-existence-index-check': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/filename-case': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-useless-collection-argument': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-bigint-literals': 'error',
    'unicorn/prefer-class-fields': 'error',
    'unicorn/prefer-classlist-toggle': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-response-static-json': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-raw': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-structured-clone': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-module-attributes': 'error',
    'unicorn/switch-case-braces': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error',
  },
});

const vitestConfig = oxlintDefineConfig({
  ...baseConfig,
  overrides: [
    {
      files: ['**/.test.ts', '**/.test-d.ts'],
      plugins: ['vitest'],
      rules: {
        // Correctness Rules
        // Suspicious Rules
        // Perf Rules
        // Restriction Rules
        // Pedantic Rules
        'vitest/no-conditional-in-test': 'error',

        // Style Rules
        'vitest/consistent-test-it': 'error',
        'vitest/consistent-vitest-vi': 'error',
        'vitest/no-alias-methods': 'error',
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-identical-title': 'error',
        'vitest/no-import-node-test': 'error',
        'vitest/no-interpolation-in-snapshots': 'error',
        'vitest/no-mocks-import': 'error',
        'vitest/no-test-prefixes': 'error',
        'vitest/no-test-return-statement': 'error',
        'vitest/no-unneeded-async-expect-function': 'error',
        'vitest/prefer-called-once': 'error',
        'vitest/prefer-called-with': 'error',
        'vitest/prefer-comparison-matcher': 'error',
        'vitest/prefer-each': 'error',
        'vitest/prefer-equality-matcher': 'error',
        'vitest/prefer-expect-resolves': 'error',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-hooks-on-top': 'error',
        'vitest/prefer-lowercase-title': 'error',
        'vitest/prefer-mock-promise-shorthand': 'error',
        'vitest/prefer-spy-on': 'error',
        'vitest/prefer-strict-equal': 'error',
        'vitest/prefer-to-be': 'error',
        'vitest/prefer-to-be-falsy': 'error',
        'vitest/prefer-to-be-object': 'error',
        'vitest/prefer-to-be-truthy': 'error',
        'vitest/prefer-to-contain': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/prefer-todo': 'error',
        'vitest/require-hook': 'error',
        'vitest/require-top-level-describe': 'error',
      },
    },
  ],
});

const jsPluginReactHooksExtraConfig = oxlintDefineConfig({
  ...baseConfig,
  jsPlugins: [
    {
      name: 'js-plugin-react-hooks-extra',
      specifier: 'eslint-plugin-react-hooks-extra',
    },
  ],
  rules: {
    'js-plugin-react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
  },
});

const jsPluginReactNamingConventionConfig = oxlintDefineConfig({
  ...baseConfig,
  jsPlugins: [
    {
      name: 'js-plugin-react-naming-convention',
      specifier: 'eslint-plugin-react-naming-convention',
    },
  ],
  rules: {
    'js-plugin-react-naming-convention/context-name': 'warn',
    'js-plugin-react-naming-convention/ref-name': 'warn',
    'js-plugin-react-naming-convention/use-state': 'warn',
  },
});

const jsPluginReactWebAPIConfig = oxlintDefineConfig({
  ...baseConfig,
  jsPlugins: [
    {
      name: 'js-plugin-react-web-api',
      specifier: 'eslint-plugin-react-web-api',
    },
  ],
  rules: {
    'js-plugin-react-web-api/no-leaked-event-listener': 'warn',
    'js-plugin-react-web-api/no-leaked-interval': 'warn',
    'js-plugin-react-web-api/no-leaked-resize-observer': 'warn',
    'js-plugin-react-web-api/no-leaked-timeout': 'warn',
  },
});

const jsPluginTanStackRouterConfig = oxlintDefineConfig({
  ...baseConfig,
  jsPlugins: [
    {
      name: 'js-plugin-tanstack-router',
      specifier: '@tanstack/eslint-plugin-router',
    },
  ],
  rules: {
    'js-plugin-tanstack-router/create-route-property-order': 'error',
  },
});

const jsPluginTanStackQueryConfig = oxlintDefineConfig({
  ...baseConfig,
  jsPlugins: [
    {
      name: 'js-plugin-tanstack-query',
      specifier: '@tanstack/eslint-plugin-query',
    },
  ],
  rules: {
    'js-plugin-tanstack-query/exhaustive-deps': 'error',
    'js-plugin-tanstack-query/no-rest-destructuring': 'error',
    'js-plugin-tanstack-query/stable-query-client': 'error',
    'js-plugin-tanstack-query/no-unstable-deps': 'error',
    'js-plugin-tanstack-query/infinite-query-property-order': 'error',
    'js-plugin-tanstack-query/no-void-query-fn': 'error',
    'js-plugin-tanstack-query/mutation-property-order': 'error',
  },
});

const configFileConfig = oxlintDefineConfig({
  ...baseConfig,
  rules: {
    // Correctness Rules
    // Suspicious Rules
    // Perf Rules
    // Restriction Rules
    // Pedantic Rules
    // Style Rules
  },
  overrides: [
    {
      files: ['**/*.config.ts'],

      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
});

// const libraryCodeConfig = oxlintDefineConfig({
//   ...baseConfig,
//   rules: {
//     // Correctness Rules
//     // Suspicious Rules
//     // Perf Rules
//     // Restriction Rules
//     // Pedantic Rules
//     // Style Rules
//   },
//   overrides: [
//     {
//       files: ['**/packages/**/*.ts'],
//
//       rules: {
//         'oxc/no-barrel-file': 'off',
//         'unicorn/no-useless-undefined': 'off',
//       },
//     },
//   ],
// });

export const fullConfig = oxlintDefineConfig({
  ...baseConfig,
  plugins: [
    ...eslintConfig.plugins,
    ...importConfig.plugins,
    ...jsdocConfig.plugins,
    ...jsxA11yConfig.plugins,
    ...nodeConfig.plugins,
    ...oxcConfig.plugins,
    ...promiseConfig.plugins,
    ...reactConfig.plugins,
    ...typescriptConfig.plugins,
    ...unicornConfig.plugins,
  ],
  jsPlugins: [
    ...jsPluginReactHooksExtraConfig.jsPlugins,
    ...jsPluginReactNamingConventionConfig.jsPlugins,
    ...jsPluginReactWebAPIConfig.jsPlugins,
    ...jsPluginTanStackQueryConfig.jsPlugins,
    ...jsPluginTanStackRouterConfig.jsPlugins,
  ],
  rules: {
    ...eslintConfig.rules,
    ...importConfig.rules,
    ...jsdocConfig.rules,
    ...jsxA11yConfig.rules,
    ...nodeConfig.rules,
    ...oxcConfig.rules,
    ...promiseConfig.rules,
    ...reactConfig.rules,
    ...typescriptConfig.rules,
    ...unicornConfig.rules,

    ...jsPluginReactHooksExtraConfig.rules,
    ...jsPluginReactNamingConventionConfig.rules,
    ...jsPluginReactWebAPIConfig.rules,
    ...jsPluginTanStackQueryConfig.rules,
    ...jsPluginTanStackRouterConfig.rules,
  },
  extends: [vitestConfig, configFileConfig],
});

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    // These values can clash with editorconfig so keep in sync
    endOfLine: 'lf',
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,

    // Everything else after
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    quoteProps: 'as-needed',
    singleAttributePerLine: true,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',

    overrides: [
      {
        files: ['*.json', '*.jsonc', '*.json5'],
        options: {
          trailingComma: 'none',
        },
      },
    ],

    sortImports: {
      order: 'asc',
      newlinesBetween: true,
      internalPattern: ['#src/', '#test/', '#mock/'],
      customGroups: [
        {
          elementNamePattern: ['react', 'react-dom'],
          groupName: 'react',
        },
        {
          elementNamePattern: ['@tanstack/**'],
          groupName: 'tanStack',
        },
        // {
        //   elementNamePattern: ['@thazstack/**'],
        //   groupName: 'thazstack',
        // },
      ],
      groups: [
        ['builtin'],

        ['react'],

        ['tanStack'],

        ['external'],

        // ['type-thazstack'],
        // ['thazstack'],

        ['internal', 'subpath'],

        ['parent', 'sibling', 'index'],

        ['style'],

        ['unknown'],
      ],
    },
  },
  lint: {
    extends: [fullConfig],
    options: { typeAware: true, typeCheck: true },
    // overrides: [
    //   {
    //     files: ['**/packages/**/*.ts', '**/tooling/**/*.ts'],
    //     rules: {
    //       // In library code we need to disable this as there has to be barrel export points.
    //       'oxc/no-barrel-file': 'off',
    //       // In library code we need to return undefined for certain cases.
    //       'unicorn/no-useless-undefined': 'off',
    //     },
    //   },
    // ],
  },
});
