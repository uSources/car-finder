import { test } from "@playwright/test";

test("Debe filtrar por fabricante y debe encontrar el coche BMW 2 Series", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page
    .locator("label")
    .filter({ hasText: /^Fabricante$/ })
    .click();
  await page.goto("http://localhost:3000/?make=3");
  await page
    .getByRole("heading", { name: "BMW 2 Series", exact: true })
    .click();
});
