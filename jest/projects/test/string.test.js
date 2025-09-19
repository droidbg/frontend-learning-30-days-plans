const { capitalize } = require("../src/string");

test("capitalizes a normal word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns empty string if input empty", () => {
  expect(capitalize("")).toBe("");
});

test("capitalizes only first letter", () => {
  expect(capitalize("javaScript")).toBe("JavaScript");
});
