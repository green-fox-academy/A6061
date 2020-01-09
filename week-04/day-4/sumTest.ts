'use strict';

import * as test from 'tape';
import { sumNum } from './sum';

let sum1: sumNum = new sumNum([1,2,3,4]);

test('Sum should be Sum!?', t => {

  t.equal(sum1.sumArr(), 10);
  t.end();
});