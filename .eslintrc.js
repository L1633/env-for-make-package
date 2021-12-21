module.exports = {
  "parser": '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "prefer-const": 0,
    quotes: [2, "double"],
    semi: [2, "always"],
    "space-before-function-paren": [2, "never"],
    camelcase: [0, { properties: "never" }],
    "arrow-parens": ["error", "as-needed"],
    'no-new': 0, // 允许使用new
    "comma-dangle": [2, 'never']
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
