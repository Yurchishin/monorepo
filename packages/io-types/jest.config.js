module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts' , '!src/**/index.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    'ts',
    'js',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.(ts|js)?$',
  coverageDirectory: 'coverage',
}
