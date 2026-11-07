import js from '@eslint/js'
import globals from 'globals'
import jest from 'eslint-plugin-jest'
import n from 'eslint-plugin-n'
import json from '@eslint/json'

export default [
  { ignores: ['dist/', 'coverage/', 'node_modules/', 'package-lock.json'] },
  {
    files: ['**/*.{js,mjs}'],
    ...js.configs.recommended
  },
  {
    files: ['**/*.{js,mjs}'],
    ...n.configs['flat/recommended-module']
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: { ...globals.node }
    }
  },
  {
    files: ['test/**/*.js'],
    ...jest.configs['flat/recommended'],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest }
    }
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended
  }
]
