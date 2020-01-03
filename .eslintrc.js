const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  globals: {
    Promise: true,
    jest: true,
    expect: true
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "no-only-tests", "react-hooks", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/explicit-member-accessibility": OFF,
    "@typescript-eslint/interface-name-prefix": [ERROR, "always"],
    "@typescript-eslint/no-explicit-any": OFF,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "@typescript-eslint/no-object-literal-type-assertion": OFF,
    "@typescript-eslint/no-unused-vars": ERROR,
    "class-methods-use-this": OFF,
    "import/default": OFF,
    "import/no-extraneous-dependencies": OFF,
    "import/no-unresolved": ERROR,
    "import/order": [ERROR, { "newlines-between": "always" }],
    "import/prefer-default-export": OFF,
    "no-nested-ternary": OFF,
    "no-only-tests/no-only-tests": ERROR,
    "no-plusplus": OFF,
    "prefer-destructuring": OFF,
    "prettier/prettier": ERROR,
    "react/destructuring-assignment": OFF,
    "react/jsx-filename-extension": [ERROR, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-indent": OFF,
    "react/jsx-one-expression-per-line": OFF,
    "react/jsx-wrap-multilines": OFF,
    "react/no-array-index-key": ERROR,
    "react/no-unescaped-entities": [ERROR, { forbid: [">", "}"] }],
    "react/no-unused-state": OFF,
    "react/prop-types": OFF,
    "react-hooks/exhaustive-deps": ERROR,
    "react-hooks/rules-of-hooks": ERROR
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
