import { describe, expect, it } from "vitest"
import getMoviesDetails from "@/lib/getMoviesDetails"
import getSeriesDetails from "@/lib/getSeriesDetails"

describe("movie", () => {
  it("should return movie details", async () => {
    const details = [
      {
        backdrop_path: "path 1",
        budget: 1,
        genres: [
          {
            id: 1,
            name: "name 1",
          },
        ],
        id: 1,
        origin_country: ["country 1"],
        original_title: "title 1",
        overview: "overview 1",
        poster_path: "path 1",
        release_date: "date 1",
        revenue: 1,
        runtime: 1,
        title: "title 1",
        video: true,
        vote_average: 1,
      },
    ]

    const movieDetails = await getMoviesDetails(1)

    expect(movieDetails).toEqual(details)
  })
})

describe("should return series details", () => {
  it("", async () => {
    const details = [
      {
        backdrop_path: "string",
        episode_run_time: [1],
        first_air_date: "string",
        genres: [{ id: 1, name: "string" }],
        id: 1,
        in_production: true,
        name: "string",
        networks: [
          {
            id: 1,
            logo_path: "string",
            name: "string",
            origin_country: "string",
          },
        ],
        number_of_seasons: 1,
        origin_country: ["string"],
        original_name: "string",
        overview: "string",
        poster_path: "string",
        vote_average: 1,
      },
    ]

    const seriesDetails = await getSeriesDetails(1)

    expect(seriesDetails).toEqual(details)
  })
})
