import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        requireConfigFile: false,
      },
    },
    rules: {
      "no-console": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
    },
    ignores: ["node_modules/", "dist/"],
  },
]);