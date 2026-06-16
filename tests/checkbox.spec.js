import { test, expect } from '@playwright/test';

test('checkbox @ui', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const Op1 = page.locator('#checkBoxOption1');
    await expect(Op1).toBeVisible();
    await Op1.check();
    await expect(Op1).toBeChecked();

    const op2=page.locator('#checkBoxOption2');
    await expect(op2).toBeVisible();
    await op2.check();
    await expect(op2).toBeChecked();
});
