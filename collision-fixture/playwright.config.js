const { defineConfig } = require('@playwright/test');
const { withMergify } = require('@mergifyio/playwright');
module.exports = withMergify(defineConfig({
  testDir: './tests',
  workers: 1,
  retries: 0,
  reporter: 'line',
}));
