import { describe, expect, it } from "vitest"
import getGenres from "@/lib/getGenres"
import type { Genres } from "@/types/genres"

describe("should return the movie genres", () => {
  it("", async () => {
    const genreList: Genres[] = [
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
