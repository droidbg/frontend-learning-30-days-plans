import { render, screen } from "@testing-library/react";
import React from "react";
import { test, expect } from "vitest";

function Button() {
  return <button>Click Me</button>;
}

test("renders button", () => {
  render(<Button />);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
