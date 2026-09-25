import { expect, it } from "vitest"
import getUpComingMovies from "@/lib/getUpComingMovies"
import type { PopularMovies } from "@/types/popularMovies"

it("", async () => {
  const movies: PopularMovies[] = [
    {
      backdrop_path: "path 1",
      genre_ids: [1],
      id: 1,
      original_title: "title 1",
      overview: "overview 1",
      popularity: 1,
      poster_path: "path 1",
      release_date: "date 1",
      title: "title 1",
      video: false,
      vote_average: 1,
      vote_count: 1,
    },
  ]

  const upComingMovies = await getUpComingMovies()

  expect(upComingMovies).toEqual(movies)
})
