module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    'import/extensions': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
