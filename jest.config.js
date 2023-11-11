module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts,vue}', '!**/node_modules/**'],
};
