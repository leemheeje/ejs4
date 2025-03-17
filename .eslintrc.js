module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: ['*.js', '*.json'],
      rules: {
        indent: ['error', 2],
        '@html-eslint/indent': ['error', 2]
      }
    }
  ],
  ignorePatterns: ['*.ejs'],
  settings: {
    'html/html-extensions': ['.html', '.ejs'],
    indent: ['error', 2],
    'html/report-bad-indent': 'error'
  },
  rules: {
    indent: ['error', 2]
  }
}
