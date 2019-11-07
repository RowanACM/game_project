module.exports = {
  roots: ['<rootDir>/pages', '<rootDir>/components'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  // setupTestFrameworkScriptFile: "<rootDir>/test/setup.js",
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
};
