const { isOfficeOpen } = require("../../src/services/date");

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

test("returns true during office hours", () => {
  jest.setSystemTime(new Date("2023-01-01T10:00:00Z"));
  expect(isOfficeOpen()).toBe(true);
});

test("returns false outside office hours", () => {
  jest.setSystemTime(new Date("2023-01-01T20:00:00Z"));
  expect(isOfficeOpen()).toBe(false);
});
