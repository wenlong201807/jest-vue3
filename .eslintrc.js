module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': [1, 'single'], //引号类型 `` "" ''
    'semi': [2, 'always'],//语句强制分号结尾
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        // '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: false
      }
    }
  ]
}
