import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test("Login Test", async ({ page }) => {
  await allure.owner("Saravanan");
  await allure.severity("critical");
  await allure.feature("Authentication");
  await allure.story("Valid Login");
  await page.goto("https://example.com");
});

