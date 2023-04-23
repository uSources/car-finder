import { test } from "@playwright/test";

test("No debe haber datos disponibles", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Buscar por...").fill("Clidrive");
  await page.getByText("No hay modelos disponibles").click();
});
