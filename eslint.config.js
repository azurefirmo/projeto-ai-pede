const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended, angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/prefer-inject': 'off'
    }
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/prefer-control-flow': 'off'
    }
  },
  {
    ignores: ['.angular/**', 'www/**', 'dist/**', 'platforms/**', 'plugins/**', 'node_modules/**', 'express-auth-demo/**']
  }
);