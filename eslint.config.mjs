import type { Linter } from "eslint";

const config: Linter.Config[] = [
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default config;
