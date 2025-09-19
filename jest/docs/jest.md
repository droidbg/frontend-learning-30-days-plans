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
Run tests:
```bash
npm test
```

Run tests with watch mode:

```bash
npm test -- --watch
```

Run tests with coverage:

```bash
npm run coverage
```