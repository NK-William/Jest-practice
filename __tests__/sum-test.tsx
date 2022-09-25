import {sum} from '../src/Functions/sum';
import {describe, expect, test, it} from '@jest/globals';

/* it('Test summation', () => {
  expect(sum(1, 2)).toEqual(3);
}); */

describe('sum module', () => {
  it('add two values', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
