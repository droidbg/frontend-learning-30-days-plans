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