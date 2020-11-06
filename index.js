module.exports = {
  plugins: ['prettier', 'react-hooks'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'prefer-destructuring': 'off',
    'react/sort-comp': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
    'no-negated-condition': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-direct-mutation-state': 'error',
    'react/destructuring-assignment': 'off',
    'id-length': [
      'error',
      {
        min: 3,
        properties: 'never',
        exceptions: ['_', 'id'],
      },
    ],
    'padded-blocks': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    curly: ['error', 'all'],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-cycle': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',
  },
};
