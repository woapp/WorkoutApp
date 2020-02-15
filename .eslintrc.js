module.exports = {
  root: true,
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import', 'react-hooks'],
  extends: [
    'eslint:recommended', // the set of rules which are recommended for all projects by the ESLint Team
    'plugin:@typescript-eslint/eslint-recommended', //
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    '@react-native-community',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      modules: true,
    },
  },
  rules: {
    'react/display-name': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/prop-types': 'off',
    'no-debugger': 'error',
    'newline-before-return': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 'off'
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
