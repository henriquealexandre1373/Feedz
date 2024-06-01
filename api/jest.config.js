/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.ts'],
  clearMocks: true,
  rootDir: root,
  verbose: true,
  displayName: 'root-tests',
  transform: {
    '^.+\\.(ts)$': 'babel-jest',
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
  projects: [
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/test/unit/**/*.test.ts'],
      collectCoverage: true,
      coverageDirectory: 'coverage/unit',
      coverageProvider: 'v8',
      coverageReporters: ['text', 'lcov'],
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/test/integration/**/*.test.ts'],
      maxWorkers: 1,
      detectOpenHandles: true,
    },
    {
      displayName: 'e2e',
      testMatch: ['<rootDir>/test/e2e/**/*.test.ts'],
      maxWorkers: 1,
      verbose: true,
      detectOpenHandles: true,
      forceExit: true,
      globalSetup: '<rootDir>/test/e2e/global-setup.js',
      globalTeardown: '<rootDir>/test/e2e/global-teardown.js',
      setupFilesAfterEnv: ['<rootDir>/test/e2e/jest-setup.ts'],
    },
  ],
};
