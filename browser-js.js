module.exports = {
  parser: 'babel-eslint',
  extends: ['./index'].map(require.resolve),
  env: {
    browser: true,
  },
  rules: {
    'no-console': 'off',
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: [],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
