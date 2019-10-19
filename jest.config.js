module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
          tsConfig: 'tsconfig.json'
        }
    },
    // globalSetup: './tests/config/globalSetup.js',
    // globalTeardown: './tests/config/globalTeardown.js',
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
