import { test, expect } from '@playwright/test';

test.describe('disable JS', () => {
  test.use({ javaScriptEnabled: false });
  test('noscript (disabled)', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#id1'),
    "Elements within 'noscript' should be accessible").toHaveCount(1);;
    await expect(page.locator('#id1'),
    "Text within 'noscript' tag should be shown").toHaveText("JS Disabled (1)");
    await expect(page.locator('#id2')).toHaveText("JS Disabled (2)");
  });
});

test('noscript (enabled)', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#id1')).toHaveCount(0);;
  await expect(page.locator('#id2')).toBeHidden();
});
