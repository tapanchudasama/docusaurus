/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  globals: {
    testStylelintRule: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  reportUnusedDisableDirectives: true,
  plugins: ['react-hooks', 'header'],
  rules: {
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
    'class-methods-use-this': OFF, // It's a way of allowing private variables.
    'func-names': OFF,
    // Ignore certain webpack alias because it can't be resolved
    'import/no-unresolved': [
      ERROR,
      {
        ignore: ['^@theme', '^@docusaurus', '^@generated', '^@site'],
      },
    ],
    'import/extensions': OFF,
    'no-restricted-exports': OFF,
    'header/header': [
      ERROR,
      'block',
      [
        '*',
        ' * Copyright (c) Facebook, Inc. and its affiliates.',
        ' *',
        ' * This source code is licensed under the MIT license found in the',
        ' * LICENSE file in the root directory of this source tree.',
        ' ',
      ],
    ],
    'jsx-a11y/click-events-have-key-events': WARNING,
    'jsx-a11y/no-noninteractive-element-interactions': WARNING,
    'jsx-a11y/html-has-lang': OFF,
    'no-console': OFF,
    'no-else-return': OFF,
    'no-param-reassign': [WARNING, {props: false}],
    'no-underscore-dangle': OFF,
    curly: [WARNING, 'all'],
    'react/jsx-filename-extension': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/no-array-index-key': OFF, // Sometimes its ok, e.g. non-changing data.
    'react/prop-types': OFF,
    'react/destructuring-assignment': OFF, // Too many lines.
    'react/prefer-stateless-function': WARNING,
    'react/jsx-props-no-spreading': OFF,
    'react/require-default-props': [ERROR, {ignoreFunctionalComponents: true}],
    'react/function-component-definition': [
      WARNING,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unstable-nested-components': [WARNING, {allowAsProps: true}],
    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/consistent-type-imports': [
      WARNING,
      {disallowTypeAnnotations: false},
    ],
    'import/first': OFF,
    'import/order': OFF,
    'import/prefer-default-export': OFF,
    'lines-between-class-members': OFF,
    'no-lonely-if': WARNING,
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      {functions: false, classes: false, variables: true},
    ],
    'no-unused-vars': OFF,
    'no-nested-ternary': WARNING,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {argsIgnorePattern: '^_', ignoreRestSiblings: true},
    ],
    '@typescript-eslint/explicit-module-boundary-types': WARNING,
    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {'ts-expect-error': 'allow-with-description'},
    ],
    'import/no-extraneous-dependencies': ERROR,
    'no-useless-escape': WARNING,
    'prefer-template': WARNING,
    'no-template-curly-in-string': WARNING,
    'array-callback-return': WARNING,
    camelcase: WARNING,
    'no-restricted-syntax': WARNING,
    'no-unused-expressions': [WARNING, {allowTaggedTemplates: true}],
    'global-require': WARNING,
    'prefer-destructuring': WARNING,
    yoda: WARNING,
    'no-await-in-loop': OFF,
    'no-control-regex': WARNING,
    'no-empty': [WARNING, {allowEmptyCatch: true}],
    'no-prototype-builtins': WARNING,
    'no-case-declarations': WARNING,
    'no-undef': OFF,
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    'no-redeclare': OFF,
    '@typescript-eslint/no-redeclare': ERROR,
    '@typescript-eslint/no-empty-interface': [
      ERROR,
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/method-signature-style': ERROR,
    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: 'lodash',
            importNames: [
              // 'compact', // TODO: TS doesn't make Boolean a narrowing function yet, so filter(Boolean) is problematic type-wise
              'filter',
              'flatten',
              'flatMap',
              'map',
              'reduce',
              'take',
              'takeRight',
              'head',
              'tail',
              'initial',
            ],
            message: 'These APIs have their ES counterparts.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        'packages/docusaurus-theme-*/src/theme/**/*.js',
        'packages/docusaurus-theme-*/src/theme/**/*.ts',
        'packages/docusaurus-theme-*/src/theme/**/*.tsx',
      ],
      rules: {
        'import/no-named-export': ERROR,
      },
    },
    {
      files: [
        'packages/create-docusaurus/templates/**/*.js',
        'packages/create-docusaurus/templates/**/*.ts',
        'packages/create-docusaurus/templates/**/*.tsx',
      ],
      rules: {
        'header/header': OFF,
        'global-require': OFF,
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': OFF,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-import-module-exports': OFF,
      },
    },
    {
      files: ['*.js', '*.mjs', '.cjs'],
      rules: {
        // Make JS code directly runnable in Node.
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
      },
    },
  ],
};
