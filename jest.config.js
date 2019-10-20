module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
          tsConfig: 'tsconfig.jest.json'
        }
    },
    moduleNameMapper: {
      "/@constants/": "<rootDir>/src/constants/",
      "\\@helpers": "<rootDir>/src/helpers/index.ts",
      "@libs": "<rootDir>/src/libs/",
      "@permissions": "<rootDir>/src/permissions/",
      "@queue": "<rootDir>/src/queue/",
      "@schema": "<rootDir>/src/schema/",
      "@server/": "<rootDir>/src/server/",
      "@aatypes": "<rootDir>/src/types/"
    },
    globalSetup: './tests/config/globalSetup.js',
    globalTeardown: './tests/config/globalTeardown.js',
    moduleFileExtensions: [ 'ts', 'js' ],
    transform: {
     '^.+\\.(ts|tsx)$': "ts-jest"
    },
    testMatch: [
     '**/tests/**/*.test.(ts)'
    ],
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts}'],
};
