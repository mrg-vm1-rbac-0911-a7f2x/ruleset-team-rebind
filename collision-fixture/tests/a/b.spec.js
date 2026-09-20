const { test, expect } = require('@mergifyio/playwright');
test('guard', async ({}, testInfo) => {
  console.log('VM1_PATHCOLL_PHYS=nested FILE=' + testInfo.file + ' TITLEPATH=' + JSON.stringify(testInfo.titlePath));
  expect('VM1_NESTED_UNQUARANTINED_FAILURE').toBe('PASS');
});
