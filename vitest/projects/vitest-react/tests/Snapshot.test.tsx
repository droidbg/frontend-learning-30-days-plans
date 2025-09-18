import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";

function Button() {
  return <button>Click Me</button>;
}

test("button snapshot", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});