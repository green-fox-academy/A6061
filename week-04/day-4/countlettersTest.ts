'use strict';

import * as test from 'tape';
import { letterCount } from './countletters';

test('Is counting letters?', t => {
  const counting = letterCount('Doggo');

  let actual = counting;

  t.equal(actual, true);
  t.end();
});