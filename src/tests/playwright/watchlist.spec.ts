import { expect, test } from "@playwright/test"

test.describe("testing add and remove from watchlist", () => {
  test("should add and remove from inside", async ({ page }) => {
    await page.goto("/")

    const moviesLink = page.getByRole("link", { name: "Filmes" })
    await moviesLink.click()
    await expect(page).toHaveURL("/movies")

    const searchInput = page.getByPlaceholder("Nome do filme ou série")
    await searchInput.fill("Batman")
    await expect(page).toHaveURL(/query=Batman/)

    const watchlistBtn = page
      .getByRole("button", {
        name: "botão de adicionar e remover da watchlist",
      })
      .first()
    await watchlistBtn.click()

    const watchlistLink = page.getByRole("link", { name: "Watchlist" }).first()
    await watchlistLink.click()
    await expect(page).toHaveURL("/watchlist")

    const batmanElement = page.getByAltText("Batman").first()
    await expect(batmanElement).toBeVisible()

    await batmanElement.click()
    await expect(page).toHaveURL(/Batman/)

    const title = page.getByRole("heading", { name: /Batman/i })
    await expect(title).toBeVisible()

    await page.goBack()
    await expect(page).toHaveURL("/watchlist")

    await watchlistBtn.click()
    await expect(batmanElement).not.toBeVisible()
  })

  test("should add and remove from outside", async ({ page }) => {
    await page.goto("/")

    const moviesLink = page.getByRole("link", { name: "Filmes" })
    await moviesLink.click()
    await expect(page).toHaveURL("/movies")

    const searchInput = page.getByPlaceholder("Nome do filme ou série")
    await searchInput.fill("Batman")
    await expect(page).toHaveURL(/query=Batman/)

    const watchlistBtn = page
      .getByRole("button", {
        name: "botão de adicionar e remover da watchlist",
      })
      .first()
    await watchlistBtn.click()

    const watchlistLink = page.getByRole("link", { name: "Watchlist" }).first()
    await watchlistLink.click()
    await expect(page).toHaveURL("/watchlist")

    const batmanElement = page.getByAltText("Batman").first()
    await expect(batmanElement).toBeVisible()

    await moviesLink.click()
    await expect(page).toHaveURL("/movies")

    await searchInput.fill("Batman")
    await expect(page).toHaveURL(/query=Batman/)

    await watchlistBtn.click()

    await watchlistLink.click()
    await expect(page).toHaveURL("/watchlist")

    await expect(batmanElement).not.toBeVisible()
  })
})
