import { test, expect } from '@playwright/test'

test('radio @ui', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const var1 = page.locator("input[value='radio1']");

    await expect(var1).toBeVisible();
    await expect(var1).not.toBeChecked();
    const var2 = page.locator("input[value='radio2']");
    await expect(var2).toBeVisible();
    await var2.check();
    await page.waitForTimeout(3000);






})
