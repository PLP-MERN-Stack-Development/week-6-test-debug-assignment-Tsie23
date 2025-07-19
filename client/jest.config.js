module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/cypress/",
    "<rootDir>/_cypress/"
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testMatch: [
    "<rootDir>/src/tests/**/*.test.js",
    "<rootDir>/src/tests/**/*.test.jsx"
  ]
}; 