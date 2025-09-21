# ESLint

## What is ESLint?

👉 ESLint is a code quality tool.

- It catches bugs early, enforces consistent style, and improves team collaboration.
- It is a tool for identifying and reporting on patterns in JavaScript code.
- It is used to enforce code style and best practices.

## Installation
#### 1. Node.js Project
```bash
npm install eslint --save-dev
npx eslint --init
```
`.eslintrc.json`

```json
{
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-console": "warn",
    "semi": ["error", "always"]
  }
}

```

#### 2. React Project
```bash
pm install eslint eslint-plugin-react eslint-plugin-react-hooks --save-dev
```
`.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": ["react", "react-hooks"],
  "rules": {
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error"
  }
}

```

#### 3. Vue Project
```bash
npm install eslint eslint-plugin-vue --save-dev
```
`.eslintrc.json`



```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  "plugins": ["vue"],
  "rules": {
    "vue/html-indent": ["error", 2],
    "vue/max-attributes-per-line": ["error", 1]
  }
}

```

## Team-Specific Rules

```json
{
  "rules": {
    "quotes": ["error", "single"],      // enforce single quotes
    "indent": ["error", 2],             // 2 spaces indentation
    "no-unused-vars": "warn",           // warn unused variables
    "no-debugger": "error"              // forbid debugger in code
  }
}
```


## Automated Code Formatting

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

`.eslintrc.json`
 

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ]
}

```

`.prettierrc.json`

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2
}

```


## ESLint in CI/CD

GitHub Actions:
 👉 Every PR must pass ESLint before merging ✅.

`.github/workflows/eslint.yml`

```yml
name: ESLint Check

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run ESLint
        run: npx eslint .

```

## Custom ESLint Plugin
Sometimes your team has specific rules not covered by ESLint.
You can write a plugin.

Example: Disallow console.log

`eslint-plugin-no-console/index.js`

```js
module.exports = {
  rules: {
    "no-console-log": {
      create: function (context) {
        return {
          CallExpression(node) {
            if (
              node.callee.object?.name === "console" &&
              node.callee.property?.name === "log"
            ) {
              context.report({
                node,
                message: "🚫 Do not use console.log! Use logger instead.",
              });
            }
          },
        };
      },
    },
  },
};

```

`.eslintrc.json`

```json
{
  "plugins": ["no-console"],
  "rules": {
    "no-console/no-console-log": "error"
  }
}
```
👉 Now ESLint will block any console.log usage and show a custom error message.


## ESLint in Pre-Commit Hooks
To prevent bad code from being committed, we add a pre-commit check.
Install tools:
```bash
npm install --save-dev husky lint-staged
```

Configure Husky:

`.husky/install.sh`

```bash
npx husky install
npm pkg set scripts.prepare="husky install"

```
 Add a Pre-commit Hook:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```
 
 package.json

```json
{
  "lint-staged": {
    "*.js": "eslint --fix"
  }
}

```

👉 Now ESLint will run on every commit and fix any issues automatically. And commit will fail if there are any errors.

 