module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // 制定哪些类型的文件可以被监测
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'// es6语法转成es5语法
  },
  // https://v1.test-utils.vuejs.org/zh/installation/#%E7%94%A8-jest-%E6%B5%8B%E8%AF%95%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6
  collectCoverageFrom: ['**/*.vue', '!**/node_modules/**'],
  transformIngorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // 文件查找对应位置
  },
  snapshotSerializ: [
    'jest-serializer-vue' // 对快照文件格式化处理方式
  ],
  testMatch: [
    '**/__tests__/**/*.test.(js|jsx|ts|tsx)'
    // '**/tests/unit/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/**/*.(spec|test).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '.eslintrc.js'
  ],
  testURL: 'http://localhost/',
  wachtPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
