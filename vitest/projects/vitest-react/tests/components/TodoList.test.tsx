import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import { TodoList } from "../../src/components/TodoList";
import React from "react";

test("adds new todo when button is clicked", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Add Todo"));

  expect(screen.getByText("New Task")).toBeTruthy();
});
