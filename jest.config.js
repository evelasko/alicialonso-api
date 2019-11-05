const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig')

module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
          tsConfig: 'tsconfig.jest.json'
        }
    },
    moduleNameMapper: pathsToModuleNameMapper({
      "@constants": ["src/constants/"],
      "@helpers": ["src/helpers/"],
      "@libs": ["src/libs/"],
      "@permissions": ["src/permissions/"],
      "@queue": ["src/queue/"],
      "@schema": ["src/schema/"],
      "@server": ["src/server/"],
      "@aatypes": ["src/types/"],
      "@core": ["src/core/"]
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
    collectCoverage: true,
    // collectCoverageFrom: ['src/**/*.{ts}'],
    testSequencer: './tests/config/sequencer.js'
};
