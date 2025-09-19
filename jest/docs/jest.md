# Jest
- `Jest` = a testing framework for JavaScript/TypeScript.
- Lets you test functions, modules, React/Vue components, and APIs.

Comes with:
- Test runner (`jest`)
- Assertion library (`expect`)
- Mocking tools (`jest.fn`, `jest.mock`)
- Coverage reports (`istanbul`)

### 📌 Setup

```bash
npm init -y
npm install -D jest
# or
npm install --save-dev jest

```

``` javascript
package.json
"scripts": {
  "test": "jest",
  "test:run": "jest run",
  "coverage": "jest run --coverage"
}
```
### 📌 Run tests:
```bash
npm test
```

Run tests with watch mode:

```bash
npm test -- --watch
```

### 📌 Istanbul Coverage Report

Test coverage with Jest + Istanbul (built-in via --coverage)
Jest has Istanbul built-in. You don't need extra libs.

Run tests with coverage:

```bash
npm run coverage
```
You'll see something like:

```
 ------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |   97.72 |      100 |   92.85 |   97.14 |                   
 services         |   93.75 |      100 |      80 |   93.33 |                   
  date.js         |     100 |      100 |     100 |     100 |                   
  db.js           |      50 |      100 |       0 |      50 | 3                 
  logger.js       |     100 |      100 |     100 |     100 |                   
  ...ontroller.js |     100 |      100 |     100 |     100 |                   
  userService.js  |     100 |      100 |     100 |     100 |                   
 utils            |     100 |      100 |     100 |     100 |                   
  array.js        |     100 |      100 |     100 |     100 |                   
  math.js         |     100 |      100 |     100 |     100 |                   
  string.js       |     100 |      100 |     100 |     100 |                   
------------------|---------|----------|---------|---------|-------------------
```
- % Stmts → lines of code covered

- % Branch → if/else, switch, ternary covered

-  % Funcs → functions covered

- % Lines → lines executed


##### Forcing Coverage Thresholds
You can force Jest to fail if coverage drops below a limit.

`jest.config.js`

```js
module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
```
##### HTML Coverage Report
👉 You’ll see a clickable report showing which lines are untested (in red).

```bash
open coverage/lcov-report/index.html
```



### 📌 Mocking

Mocking means faking a part of your code (like an API, database, or external library) so you can test your function without relying on the real thing.

Jest gives us 3 main ways/tools:
- `jest.fn()` → fake function
- `jest.spyOn()` → watch a real function
- `jest.mock()` → replace a whole module

### 📌 Unit Tests vs Integration Tests
#### 🔹 Unit Test

Tests a small piece of code in isolation (like a single function).

👉 No external systems involved (no DB, no API).

Example (from our earlier movies.js):
```js
test("addMovie should throw error if data invalid", () => {
  expect(() => addMovie({ title: "X" })).toThrow("Invalid movie data");
});
```
👉 Here we only test one function → addMovie.
No server, no HTTP request, no real database.
That’s a unit test.

#### 🔹 Integration Test

Tests how different parts of the app work together.

👉 Often involves HTTP requests, DB calls, middlewares.

Example (from our Movies API):
```js
test("POST /movies should add a new movie", async () => {
  const newMovie = { title: "Dunkirk", rating: 7.9, genre: "War" };
  const res = await request(app).post("/movies").send(newMovie);

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty("title", "Dunkirk");
});

```
👉 Here we’re testing the whole chain:

- HTTP request hits Express route 

- Route logic validates the request

- New movie is added to the in-memory DB

- Response is sent back

This is integration testing because we’re testing multiple layers together.


### 📌 Custom Matchers

#### What is a matcher?

In Jest, a matcher is what comes after `expect(...)`.
Examples:
- `expect(1).toBe(1)`
- `expect("Hello").toContain("H")`
- `expect(true).toBeTruthy()`
- `expect(value).toBe(10);`
- `expect(array).toContain(5);`
- `expect(user).toHaveProperty("name");`

These are **built-in matchers**.

Jest lets you create your own **custom matchers**.

##### Example:

```js
test("custom matcher", () => {
  expect(1).toBePositive();
});
```

#### Why Custom Matchers?
👉 Sometimes, your app has domain-specific rules.

👉 Writing `expect(...).toHaveProperty(...).toBe(...)` gets messy.

👉 Instead, you create your own matcher → cleaner & reusable.

#### How to Create Custom Matchers?

```js
expect.extend({
  toBePositive(value) {
    return {
      pass: value > 0,
      message: () => `${value} is not positive`,
    };
  },
});
```

#### Example:

```js
test("custom matcher", () => {
  expect(1).toBePositive();
});
```

#### Explanation:

- `expect.extend({ ... })` → adds our custom matcher.

- `toBePositive(value)` → our custom matcher.

- `pass: value > 0` → checks if value is positive.

- `message: () => ${value} is not positive` → returns a message if value is not positive.

