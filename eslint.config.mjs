import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
    rules: {
      // General Best Practices
      "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
      "no-console": "warn",
      "eqeqeq": ["error", "always"], // Enforce strict equality
      "curly": "error", // Require curly braces for control statements
      "no-implicit-globals": "error", // Prevent accidental global variables

      // Code Formatting
      "indent": ["error", 2], // 2 spaces indentation
      "quotes": ["error", "single"], // Enforce single quotes
      "semi": ["error", "always"], // Require semicolons
      "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline
      "eol-last": ["error", "always"], // Enforce newline at the end of files
      "max-len": ["warn", { code: 100, ignoreUrls: true }], // Line length limit
      "no-trailing-spaces": "error", // Disallow trailing whitespace

      // TypeScript-Specific
      "@typescript-eslint/no-explicit-any": "warn", // Discourage `any` type
      "@typescript-eslint/explicit-function-return-type": "warn", // Require return types
      "@typescript-eslint/no-empty-interface": "error", // Disallow empty interfaces
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            Object: {
              message: "Use {} instead.",
            },
            Function: {
              message: "Specify the function signature explicitly.",
            },
          },
        },
      ],

      // Import/Export Rules
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "no-duplicate-imports": "error", // Prevent duplicate imports
      "import/no-extraneous-dependencies": "error", // Disallow imports not listed in `package.json`

      // Code Complexity
      "complexity": ["warn", 10], // Warn if function complexity exceeds 10
      "max-lines": ["warn", { max: 300, skipBlankLines: true, skipComments: true }], // Limit file length
      "max-depth": ["warn", 4], // Limit nesting depth

      // Encouraging Readable Code
      "arrow-body-style": ["error", "as-needed"], // Enforce concise arrow functions
      "prefer-const": "error", // Prefer `const` for variables
      "no-var": "error", // Disallow `var`
    },
  },
];
