'use strict';

import * as test from 'tape';
import { anagram } from './anagram';

test('Is Anagram?', t => {
  const merger = anagram('God', 'Dog');

  let actualAnagram = merger;

  t.equal(actualAnagram, true);
  t.end();
});