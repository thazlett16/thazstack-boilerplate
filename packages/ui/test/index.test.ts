import { expect, expectTypeOf, test } from 'vite-plus/test';

import { fn } from '../src/index';

test('fn', () => {
  expect(fn()).toBe('Hello, tsdown!');
  expectTypeOf(fn()).toEqualTypeOf<string>();
});
