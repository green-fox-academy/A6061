'use strict';

import * as test from 'tape';
import { getApple } from './apples';

test('Apple is apple?', t => {
  const actualString = getApple('Apple');
  const expectedString = 'Apple';

  t.equal(actualString, expectedString);
  t.end();
});