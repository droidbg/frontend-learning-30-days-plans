// 🔹 Mock a function

// const fakeFn = jest.fn();
// fakeFn("hello");
// expect(fakeFn).toHaveBeenCalledWith("hello");


// 🔹 Mock a module

// jest.mock("./api");  // replaces real API with mock

// const api = require("./api");
// api.fetchData.mockResolvedValue({ id: 1 });

// test("uses mocked API", async () => {
//   const data = await api.fetchData();
//   expect(data.id).toBe(1);
// });


const { fetchUsers } = require( "../../src/services/userService");
// Mock global fetch
global.fetch = jest.fn();

test("fetchUsers returns data from API", async () => {
  const mockData = [{ id: 1, name: "Alice" }];
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockData,
  });

  const users = await fetchUsers();
  expect(users).toEqual(mockData);
  expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users");
});

test("fetchUsers throws error if API fails", async () => {
  fetch.mockResolvedValueOnce({ ok: false });

  await expect(fetchUsers()).rejects.toThrow("Failed to fetch users");
});