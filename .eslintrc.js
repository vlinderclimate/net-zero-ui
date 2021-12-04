module.exports = {
  extends: ["standard-with-typescript", "plugin:storybook/recommended"],
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    quotes: ["error", "double"],
    "multiline-ternary": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/member-delimiter-style": "off"
  }
}
