module.exports = {
  extends: ['./index'].map(require.resolve),
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 'off',
    'id-length': [
      'error',
      {
        min: 3,
        properties: 'never',
        exceptions: ['_', 'fs', 'os'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
