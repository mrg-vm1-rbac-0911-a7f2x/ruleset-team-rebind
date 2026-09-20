const { test, expect } = require('@mergifyio/playwright');
test('guard', async ({}, testInfo) => {
  console.log('VM1_PATHCOLL_PHYS=backslash FILE=' + testInfo.file + ' TITLEPATH=' + JSON.stringify(testInfo.titlePath));
  expect('VM1_BACKSLASH_INTENDED_QUARANTINE').toBe('PASS');
});
