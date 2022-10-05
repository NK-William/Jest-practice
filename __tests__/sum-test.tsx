import {sum} from '../src/Functions/sum';
import {describe, expect, test, it, jest} from '@jest/globals';

/* it('Test summation', () => {
  expect(sum(1, 2)).toEqual(3);
}); */

describe('sum module', () => {
  it('add two values', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

// The following is just for a demonstration
/* test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
}); */

/* test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
}); */

/* test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  }); */

// For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
/*   test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  }); */

// You can check strings against regular expressions with toMatch:
/* test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  }); */

// You can check if an array or iterable contains a particular item using toContain:
/* const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
}); */

// If you want to test whether a particular function throws an error when it's called, use toThrow.
// the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
/* function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
}); */

// Mock functions = Testing fake code to having tests perform reliably
// Mock function is a fake function, they can be async, they can return promises, some data, etc...

const add = jest.fn(() => 3); // this make add function to always return 3.

test('add', () => {
  expect(add(1, 2)).toBe(3); // Test pass
  expect(add(6, 3)).toBe(3); // this will still pass because the answer is always gonna be 3, no matter what I pass into the function.
  expect(add(6)).toBe(3); // Test pass
  expect(add(2, 2)).toBe(3); // Test pass
});

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1 : [1] -> second "call", [0] -> argument.
expect(mockCallback.mock.calls[1][0]).toBe(1);
test('test mock callback', () => {
  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
