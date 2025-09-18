import { test, expect } from "vitest";
import {
  add,
  subtract,
  multiply,
  divide,
  capitalize,
  reverse,
  isEven,
  sumArray,
  maxArray,
  minArray,
} from "../src/utils";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse word", () => {
  expect(reverse("abc")).toBe("cba");
});

test("add", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiply", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("divide normal", () => {
  expect(divide(6, 2)).toBe(3);
});

test("divide by zero", () => {
  expect(divide(6, 0)).toBeNull();
});

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse", () => {
  expect(reverse("abc")).toBe("cba");
});

test("isEven", () => {
  expect(isEven(4)).toBe(true);
});

test("sumArray", () => {
  expect(sumArray([1, 2, 3])).toBe(6);
});

test("maxArray", () => {
  expect(maxArray([1, 9, 3])).toBe(9);
});

test("minArray", () => {
  expect(minArray([5, 2, 7])).toBe(2);
});
