const DISABLED = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [DISABLED, "always"],
    "header-max-length": [WARN, "always", 72]
  }
};
