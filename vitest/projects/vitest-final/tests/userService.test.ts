import { test, expect, vi } from "vitest";
import { getUsers } from "../src/services/userService";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, name: "Mock User" }]),
  })
) as any;

test("getUsers returns mocked data", async () => {
  const users = await getUsers();
  expect(users).toEqual([{ id: 1, name: "Mock User" }]);
});
