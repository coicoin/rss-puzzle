import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

const commonLanguageOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
};

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.browser,
      ...commonLanguageOptions,
    },
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    extends: [tseslint.configs.recommended, eslintConfigPrettier],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ...commonLanguageOptions,
      },
      globals: globals.browser,
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
    },
  },
  { ignores: ['eslint.config.ts', 'node_modules', 'dist'] },
]);
