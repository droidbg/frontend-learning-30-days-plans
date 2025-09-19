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