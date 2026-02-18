/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
