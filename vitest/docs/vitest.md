# Vitest
Vitest = a testing framework for JavaScript/TypeScript.

Built to work well with Vite + modern apps (React, Vue, Node).

- Runs unit tests (small pieces of code)

- Snapshot testing (check UI looks the same)

- Mocks (fake versions of APIs or services)

### - Node.js Project

```bash
npm init -y
npm install -D vitest
```

``` javascript
package.json
"scripts": {
  "test": "vitest",
  "test:run": "vitest run",
  "coverage": "vitest run --coverage"
}

```


### - React Project

```bash
npm create vite@latest vitest-react -- --template react-ts
cd vitest-react
npm install
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

In `vite.config.ts` , enable testing

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // simulate browser
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
});

```


### - Vue Project
```bash
npm create vite@latest vitest-vue -- --template vue-ts
cd vitest-vue
npm install
npm install -D vitest @vue/test-utils jsdom
```
In `vite.config.ts` , enable testing

```ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    globals: true,
  },
});
```

 

## Snapshot Test
Snapshot = save HTML structure and compare later.
```tsx
import { render } from "@testing-library/react";
import { test, expect } from "vitest";

function Button() {
  return <button>Click Me</button>;
}

test("button snapshot", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});
```
- `render(<Button />)` → renders React component.

- `expect(container).toMatchSnapshot();` → saves output as snapshot.
- First run creates `__snapshots__` folder, later runs compare automatically.
- Next run → Vitest checks if UI changed.


#### Coverage Report

```bash
npm install -D c8
npm run coverage
npx vitest run --coverage
```



# Mocking in Vitest.

👉 Mocking means faking a part of your code (like an API, database, or external library) so you can test your function without relying on the real thing.

##### Why?

- Real API might be slow or down.

- File system/database might not exist in CI.

- You just want to test your logic, not external systems.


##### Vitest gives us 3 main ways/tools:
- `vi.fn()` → fake function

- `vi.spyOn()` → watch a real function

- `vi.mock()` → replace a whole module

#### 🟦 1. Fake Functions with vi.fn()

```ts
// src/utils.ts
export function runCallback(callback: (msg: string) => void) {
  callback("Hello");
}

```

```ts
// src/utils.test.ts
import { test, expect, vi } from "vitest";
import { runCallback } from "./utils";

test("calls the callback with Hello", () => {
  const mockFn = vi.fn(); // fake function
  runCallback(mockFn);

  expect(mockFn).toHaveBeenCalled(); 
  expect(mockFn).toHaveBeenCalledWith("Hello");  
});

```
###### 🔎 Explanation:

- `vi.fn()` creates a fake callback.

- We check if and how it was called.

- No real code needed → only testing the behavior.


#### 🟦 2. Spying with vi.spyOn()
Watching a real function but not replacing it.
```ts
// src/math.ts
export const math = {
  add(a: number, b: number) {
    return a + b;
  },
};
```


```ts
// src/math.test.ts
import { test, expect, vi } from "vitest";
import { math } from "./math";

test("spies on add", () => {
  const spy = vi.spyOn(math, "add");

  const result = math.add(2, 3);

  expect(result).toBe(5);
  expect(spy).toHaveBeenCalledWith(2, 3);

  spy.mockRestore(); // clean up
});
```
###### 🔎 Explanation:
- `vi.spyOn(obj, "method")` → watches a real method.

- We can see how many times it ran, and with what arguments.

- Useful when you want to verify calls but still use real logic.


#### 🟦 3. Mocking Modules with vi.mock()
Replace a whole module 
Example: Replace File System Module.
```ts
// src/fsHelper.ts
import fs from "fs";

export function readFile(path: string) {
  return fs.readFileSync(path, "utf-8");
}

```


```ts
// src/fsHelper.test.ts
import { test, expect, vi } from "vitest";

// Mock the whole "fs" module
vi.mock("fs", () => ({
  default: {
    readFileSync: vi.fn(() => "mock file content"),
  },
}));

import { readFile } from "./fsHelper";

test("reads file using mock", () => {
  expect(readFile("path.txt")).toBe("mock file content");
});

```
###### 🔎 Explanation:
- `vi.mock("module-name", () => { ... })` replaces the whole module.

- We told it “whenever `fs.readFileSync` is called, just return a fake string”.

- Great for external libs like `axios, fs, DB clients,` etc.

# Vitest test environments.

##### 🟦 What is a Test Environment?
When you run tests, Vitest needs to know what kind of runtime your code expects:

- `node` environment → simulates a Node.js backend (e.g., file system, APIs, servers).

- `jsdom` environment → simulates a web browser DOM (for React/Vue/vanilla DOM code).

- Custom environments → you can extend or write your own for special cases.

By default, Vitest uses `node`.

#### 🟦 1. Node Environment (default)

👉 Best for: backend, utilities, file system, APIs.

`vitest.config.ts`

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
  },
});
```
Example test

```ts
import { test, expect } from "vitest";
import fs from "fs";

test("reads file from node fs", () => {
  fs.writeFileSync("temp.txt", "hello");
  const content = fs.readFileSync("temp.txt", "utf-8");
  expect(content).toBe("hello");
});

```

###### 🔎 Explanation:

- Vitest runs in pure Node.js.
- You can use fs, path, http, etc.


#### 🟦 2. jsdom Environment
👉 Best for: frontend testing (React, Vue, DOM APIs).
`jsdom` is a library that simulates a browser inside Node.js.

`vitest.config.ts`
```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});

```
Example React test:

```ts
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

function Greeting() {
  return <h1>Hello World</h1>;
}

test("renders greeting", () => {
  render(<Greeting />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

```
###### 🔎 Explanation:
- `jsdom` creates a fake DOM (`document`, `window`, etc.).
- `React/Vue` apps need this environment


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```

