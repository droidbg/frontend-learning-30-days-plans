const { unique, chunk } = require("../../src/utils/array");

describe("unique()", () => {
  test("removes duplicate numbers", () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test("works with strings", () => {
    expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  test("returns empty array if input empty", () => {
    expect(unique([])).toEqual([]);
  });
});

describe("chunk()", () => {
  test("splits array into chunks", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("handles chunk size larger than array", () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });

  test("throws error if chunk size <= 0", () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow("Size must be greater than 0");
  });

  test("works with strings in array", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });
});
