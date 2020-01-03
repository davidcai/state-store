module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/__tests__/*",
    "!**/__mocks__/*",
    "!**/index.{js,jsx,ts,tsx}",
    "!**/demo/*",
    "!**/*.demo.{js,jsx,ts,tsx}",
    "!**/App.{js,jsx,ts,tsx}"
  ],
  coverageReporters: ["text", "html"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testRegex: "src/.*(\\.|/)(test|spec)\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
