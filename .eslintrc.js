module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
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
    'i18next',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
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
    'i18next/no-literal-string': [2, { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    quotes: [2, 'single'],
    semi: ['error', 'never'],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{tsx,ts}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
}
