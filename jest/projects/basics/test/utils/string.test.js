const { capitalize, isEmail, truncate  } = require("../../src/utils/string");
describe("capitalize()", () => {

test("capitalizes a normal word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns empty string if input empty", () => {
  expect(capitalize("")).toBe("");
});

test("capitalizes only first letter", () => {
    expect(capitalize("javaScript")).toBe("JavaScript");
  });
});

describe("isEmail()", () => {
  test("valid emails", () => {
    expect(isEmail("test@example.com")).toBe(true);
    expect(isEmail("user.name+tag@domain.co")).toBe(true);
  });

  test("invalid emails", () => {
    expect(isEmail("plainaddress")).toBe(false);
    expect(isEmail("@missingusername.com")).toBe(false);
    expect(isEmail("user@.com")).toBe(false);
  });

  test("empty string", () => {
    expect(isEmail("")).toBe(false);
  });
});

describe("truncate()", () => {
  test("truncates long string", () => {
    expect(truncate("This is a long sentence", 10)).toBe("This is a ...");
  });

  test("returns original string if short enough", () => {
    expect(truncate("Short", 10)).toBe("Short");
  });

  test("throws error if input is not string", () => {
    expect(() => truncate(12345, 5)).toThrow("Input must be a string");
  });

  test("handles exact length", () => {
    expect(truncate("Hello", 5)).toBe("Hello");
  });
});