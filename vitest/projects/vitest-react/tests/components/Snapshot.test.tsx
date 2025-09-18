import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";
import { Button } from "../../src/components/Button";

test("button snapshot", () => {
  const { container } = render(<Button label="Click Me" />);
  expect(container).toMatchSnapshot();
});

test("matches snapshot", () => {
  const { asFragment } = render(<Button label="Save" disabled />);
  expect(asFragment()).toMatchSnapshot();

});
// ###### 🔎 Explanation:

// `render(...).asFragment()` gives the full HTML of the rendered component.

// `toMatchSnapshot()` saves it in a file.

// If the button changes later (different text/attrs), test fails → alerts you to review UI changes.