import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";
import { Button } from "../src/components/Button";

test("button snapshot", () => {
  const { container } = render(<Button label="Click Me" />);
  expect(container).toMatchSnapshot();
});