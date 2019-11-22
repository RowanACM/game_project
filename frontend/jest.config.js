module.exports = {
  roots: ['<rootDir>/pages', '<rootDir>/components'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/emptyModule.js',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
};
