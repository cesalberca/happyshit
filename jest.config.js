module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  testMatch: ['<rootDir>/src/(/**/*.test.(ts)|**/__tests__/*.(ts))'],
}
