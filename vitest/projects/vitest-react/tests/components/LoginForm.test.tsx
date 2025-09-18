import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { LoginForm } from "../../src/components/LoginForm";
import React from "react";

test("submits username and password", () => {
  const mockLogin = vi.fn();  
  render(<LoginForm onLogin={mockLogin} />);

  fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "john" } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "1234" } });
  fireEvent.click(screen.getByText("Login"));

  expect(mockLogin).toHaveBeenCalledWith("john", "1234");
});

// ###### 🔎 Explanation:
// render(<LoginForm />) → renders our component in a fake browser (jsdom).

// fireEvent.change(...) → simulates typing into inputs.

// fireEvent.click(...) → simulates button click.

// vi.fn() → fake function to track the onLogin call.

// expect(...).toHaveBeenCalledWith(...) → makes sure the form passed the right data.