module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  // Include required extensions but prioritize .ts files
  // přidám i js, nevadí to protože jsou ignorovány přes moduleFileExtensions. jest to ale takto vyžaduje
  moduleFileExtensions: ["ts", "tsx", "json", "js"],
  // Ignore specific paths and JS files when resolving modules
  testPathIgnorePatterns: ["/node_modules/", "/lib/", "\\.d\\.ts$", "\\.js$"],
  // Force resolution order to prefer .ts files
  moduleNameMapper: {
    // This will make Jest resolve .ts files first over .js files
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/**/*.test.ts",
    "!src/**/*.js",
  ],
};
