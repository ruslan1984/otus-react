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
    "^@admin/(.*)$": "<rootDir>/src/Admin/$1",
    "^@auth/(.*)$": "<rootDir>/src/Auth/$1",
    "^@grammar/(.*)$": "<rootDir>/src/Admin/Grammar/$1",
    "^@orph/(.*)$": "<rootDir>/src/Admin/Orphography/$1"
    
  },
  moduleDirectories: ["node_modules", "src"],
};
