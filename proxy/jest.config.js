const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  globals: {
    NODE_ENV: "test",
  },
  verbose: false,
  moduleFileExtensions: ["js", "json", "ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)s$": [
      "ts-jest",
      {
        autoMapModuleNames: true,
      },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  setupFiles: ["<rootDir>/tests/jest.setup.ts"],
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
