import recommendedConfig from "@eslint/js";

export default [
  recommendedConfig.configs.recommended, // Подключаем "eslint:recommended"
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
    },
    ignores: ["node_modules/", "dist/"],
  },
];