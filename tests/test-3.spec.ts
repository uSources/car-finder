import { test } from "@playwright/test";

test("Debe buscar y encontrar 124 Spider", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Buscar por...").click();
  await page.getByPlaceholder("Buscar por...").fill("124 Spider");
  await page.getByRole("heading", { name: "FIAT 124 Spider" }).click();
});
