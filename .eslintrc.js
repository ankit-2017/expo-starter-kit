module.exports = {
  env: {
      "browser": true,
      "es2021": true
    },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parserOptions: {
      "ecmaVersion": 'latest',
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
  settings: { react: { version: '18.3' } },
  plugins: ['react-refresh'],
  parser: "@babel/eslint-parser",
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
