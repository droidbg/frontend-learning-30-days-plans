jest.mock("../../src/services/db"); // auto-mock db.js
const db = require("../../src/services/db");
const { getUserProfile } = require("../../src/services/userController");

test("returns mocked user profile", async () => {
  db.getUserById.mockResolvedValue({ id: 1, name: "Mock User" });

  const result = await getUserProfile(1);

  expect(result).toEqual({ id: 1, name: "Mock User", profileComplete: true });
  expect(db.getUserById).toHaveBeenCalledWith(1);
});
