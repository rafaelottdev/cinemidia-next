import { describe, expect, it } from "vitest"
import getGenres from "@/lib/getGenres"

describe("should return the movie genres", () => {
  it("", async () => {
    const genreList = [
      {
        id: 1,
        name: "genre 1",
      },
      {
        id: 2,
        name: "genre 2",
      },
    ]

    const genres = await getGenres()

    expect(genres).toEqual(genreList)
  })
})
