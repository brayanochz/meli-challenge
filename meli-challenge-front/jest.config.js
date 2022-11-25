module.export = {
    // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  preset: "ts-jest",

  transform: {'^.+\\.ts?$': 'ts-jest'},

  testEnvironment: 'node',

  testRegex: '.*\\.(test|spec)?\\.(ts|tsx)$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  transformIgnorePatterns: ['/node_modules/(?!@byte-this)'],

  "testEnvironment": "jsdom",
  "collectCoverage": true,
  "collectCoverageFrom": ["<rootDir>/src/client/**"],
  "coverageThreshold": {
    "global": {
      "lines": 90
    }
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ],
  testEnvironmentOptions: {
    "browsers": [
      "chrome",
      "firefox",
      "safari"
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js" },
};