import { test, expect } from '@playwright/test';

test('shows welcome text', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('h3').innerText()).toContain('Welcome Home');
});
