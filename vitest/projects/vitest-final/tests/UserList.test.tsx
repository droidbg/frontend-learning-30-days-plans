import { render, screen, waitFor } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { UserList } from "../src/components/UserList";
import * as userService from "../src/services/userService";

test("renders users from API", async () => {
  vi.spyOn(userService, "getUsers")
    .mockResolvedValue([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);

  render(<UserList />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });
});

test("matches snapshot", async () => {
  vi.spyOn(userService, "getUsers")
    .mockResolvedValue([{ id: 1, name: "Alice" }]);

  const { asFragment } = render(<UserList />);
  await screen.findByText("Alice");

  expect(asFragment()).toMatchSnapshot();
});
