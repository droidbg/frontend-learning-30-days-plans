import { test, expect } from "vitest";
import { capitalize, reverse } from "../src/utils";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse word", () => {
    expect(reverse("abc")).toBe("cba");
  });
