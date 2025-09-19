const { add } = require("../src/math");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
 

test("add positive numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("add with zero", () => {
  expect(add(5, 0)).toBe(5);
});

test("add negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});
