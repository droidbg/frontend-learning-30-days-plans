const { add ,divide, average } = require("../../src/utils/math");

describe("add", () => {
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
});


describe("divide()", () => {
  test("divides positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
    expect(divide(-10, 2)).toBe(-5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });

  test("handles floating point division", () => {
    expect(divide(1, 3)).toBeCloseTo(0.333, 2);
  });
});

describe("average()", () => {
  test("returns average of numbers", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  test("returns 0 for empty array", () => {
    expect(average([])).toBe(0);
  });

  test("throws error if input not array", () => {
    expect(() => average("123")).toThrow("Input must be an array");
  });

  test("handles negative numbers", () => {
    expect(average([-2, -4, -6])).toBe(-4);
  });
});