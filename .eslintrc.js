/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
          'type',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    complexity: 'warn',
    'no-console': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@next/next/no-img-element': 'off',
  },
  overrides: [
    {
      files: [
        '**/constants/**/*',
        '**/repositories/**/*',
        '**/types/**/*',
        '**/utils/**/*',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
