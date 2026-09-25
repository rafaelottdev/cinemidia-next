import { expect, test } from "@playwright/test"

test.describe("testing search flow", () => {
  test("should search movies", async ({ page }) => {
    await page.goto("/")

    const moviesLink = page.getByRole("link", { name: "Filmes" })
    await moviesLink.click()
    await expect(page).toHaveURL("/movies")

    const searchInput = page.getByPlaceholder("Nome do filme ou série")
    await searchInput.fill("Batman")
    await expect(page).toHaveURL(/query=Batman/)

    const batmanElement = page.getByAltText("Batman").first()
    await expect(batmanElement).toBeVisible()
    await batmanElement.click()
    await expect(page).toHaveURL(/Batman/)

    const title = page.getByRole("heading", { name: /Batman/i })
    await expect(title).toBeVisible()

    await page.goBack()
    await expect(page).toHaveURL(/query=Batman/)
  })

  test("should search series", async ({ page }) => {
    await page.goto("/")

    const moviesLink = page.getByRole("link", { name: "Séries" })
    await moviesLink.click()

    await expect(page).toHaveURL("/series")

    const searchInput = page.getByPlaceholder("Nome do filme ou série")

    await searchInput.fill("Batman")

    await expect(page).toHaveURL(/query=Batman/)

    const batmanElement = page.getByAltText("Batman").first()

    await expect(batmanElement).toBeVisible()
    await batmanElement.click()

    await expect(page).toHaveURL(/Batman/)

    const title = page.getByRole("heading", { name: /Batman/i })

    await expect(title).toBeVisible()

    await page.goBack()

    await expect(page).toHaveURL(/query=Batman/)
  })
})
