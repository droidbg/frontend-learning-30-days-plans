import {test, expect} from 'vitest'

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})

test("math works", () => {
    expect(2 + 2).toBe(4);
  });


//   ------------------------ Testing Functions ------------------------

test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3)
  });

function add(a: number, b: number) {
    return a + b;
  }
  
  