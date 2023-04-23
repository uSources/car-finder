import { test } from "@playwright/test";

test("Debe tener el checkbox de fabricante BMW activo", async ({ page }) => {
  await page.goto("http://localhost:3000/?make=3");
  await page
    .locator("label")
    .filter({ hasText: /^Fabricante$/ })
    .click();
  await page.locator("label").filter({ hasText: "BMW" }).isChecked();
});
