const { test, expect } = require('@mergifyio/playwright');
const fs = require('node:fs');
const path = require('node:path');
test('guard', async ({}, testInfo) => {
  console.log('VM1_PATHCOLL_PHYS=backslash FILE=' + testInfo.file + ' TITLEPATH=' + JSON.stringify(testInfo.titlePath));
  const st = JSON.parse(fs.readFileSync(process.env.MERGIFY_STATE_FILE, 'utf8'));
  const rel = path.relative(st.rootDir, testInfo.file);
  console.log('VM1_PATHCOLL_STATE rootDir=' + st.rootDir + ' rel=' + JSON.stringify(rel) + ' normalized=' + JSON.stringify(rel.replaceAll('\\','/')) + ' quarantines=' + JSON.stringify(st.quarantinedTests));
  expect('VM1_BACKSLASH_INTENDED_QUARANTINE').toBe('PASS');
});
