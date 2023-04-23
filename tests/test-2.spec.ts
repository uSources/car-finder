import { test } from "@playwright/test";

test("Debe ordenar por ID, y el primer coche debe ser Acura MDX", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.locator("html").click();
  await page.getByRole("combobox").selectOption("id");
  await page.getByRole("heading", { name: "Acura MDX" }).click();
});
