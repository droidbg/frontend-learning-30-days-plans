const { logMessage } = require("../../src/services/logger");

test("logs message correctly", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});

  logMessage("Hello World");

  expect(spy).toHaveBeenCalledWith("LOG:", "Hello World");

  spy.mockRestore();
});
