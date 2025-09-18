import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { test, expect, vi } from "vitest";
import { Button } from "../../src/components/Button";
 

test("renders button", () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText("Click Me")).toBeTruthy();
});

test("calls onClick", () => {
  const mockFn = vi.fn();
  render(<Button label="Click" onClick={mockFn} />);
  fireEvent.click(screen.getByText("Click"));
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("disabled button", () => {
  render(<Button label="Nope" disabled />);
  expect(screen.getByText("Nope")).toHaveProperty("disabled", true);
}); 
 

