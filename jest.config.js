// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@admin/(.*)$": "<rootDir>/src/modules/Admin/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@auth/(.*)$": "<rootDir>/src/modules/Auth/$1",
    "^@grammar/(.*)$": "<rootDir>/src/modules/Admin/Grammar/$1",
    "^@orph/(.*)$": "<rootDir>/src/modules/Admin/Orphography/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
  },
  moduleDirectories: ["node_modules", "src"],
};
