const { test, expect } = require('@playwright/test');
const { spawnSync } = require('node:child_process');

test('path collision child run must be green', async () => {
  const r = spawnSync(process.execPath, [
    require.resolve('@playwright/test/cli'),
    'test',
    '--config',
    'collision-fixture/playwright.config.js',
    '--workers=1',
  ], { encoding: 'utf8', env: { ...process.env, GITHUB_ACTIONS: 'true', GITHUB_REPOSITORY: 'mrg-vm1-rbac-0911-a7f2x/ruleset-team-rebind', GITHUB_SERVER_URL: 'https://github.com' } });
  console.log('VM1_CHILD_STDOUT_BEGIN\n' + (r.stdout || '') + '\nVM1_CHILD_STDOUT_END');
  console.log('VM1_CHILD_STDERR_BEGIN\n' + (r.stderr || '') + '\nVM1_CHILD_STDERR_END');
  console.log('VM1_CHILD_EXIT=' + r.status);
  expect(r.status).toBe(0);
});
