module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    "eslint:recommended",
    '@vue/typescript/recommended',
    //"@vue/prettier",
    //"@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'spaced-comment': 'off',
    'eol-last':'off' ,
    'semi': 'off',
    'quotes': 'off',
    'indent': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-useless-escape": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    camelcase: [1, { properties: "never" }],
    "@typescript-eslint/no-this-alias": ["off"],
    "space-before-function-paren": 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
