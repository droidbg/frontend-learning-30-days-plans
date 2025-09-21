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