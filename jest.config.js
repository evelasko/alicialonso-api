const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
          tsConfig: 'tsconfig.jest.json',
          diagnostics: {
            ignoreCodes: [2339]
          }
        }
    },
    moduleNameMapper: pathsToModuleNameMapper({
      "@constants": ["src/constants/"],
      "@helpers": ["src/helpers/"],
      "@permissions": ["src/permissions/"],
      "@queue": ["src/queue/"],
      "@schema": ["src/schema/"],
      "@server": ["src/server/"],
      "@aatypes": ["src/types/"],
    },
    {
      prefix: '<rootDir>/'
    }),
    globalSetup: './tests/config/globalSetup.js',
    globalTeardown: './tests/config/globalTeardown.js',
    moduleFileExtensions: [ 'ts', 'js' ],
    transform: {
     '^.+\\.(ts|tsx)$': "ts-jest"
    },
    testMatch: [
     '**/tests/**/*.test.(ts)',
     '**/tests/**/*.spec.(ts)'
    ],
    testEnvironment: 'node',
    verbose: true,
    collectCoverageFrom: [
      "src/**/*.ts"
    ],
    coverageReporters: [
      "lcov"
    ],
    testSequencer: './tests/config/sequencer.js'
};
