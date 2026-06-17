import { test, expect } from '@playwright/test'

test('radio ',{tag: '@smoke'}, async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const var1 = page.locator("input[value='radio1']");
    await expect(var1).toBeVisible();
    await var1.check();
    await expect(var1).toBeChecked();
    const var2 = page.locator("input[value='radio2']");
    await expect(var2).toBeVisible();
    await expect(var2).toBeChecked();
    await page.waitForTimeout(3000);
})
