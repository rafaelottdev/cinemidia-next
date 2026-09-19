import { describe, expect, it } from "vitest"
import getMovies from "@/lib/getMovies"
import getPopularMovies from "@/lib/getPopularMovies"
import getSeries from "@/lib/getSeries"

describe("", () => {
  describe("movies", () => {
    it("should return movies", async () => {
      const movie = [
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

      const movies = await getMovies("discover")

      expect(movies).toEqual(movie)
    })

    it("should return popular movies", async () => {
      const movie = [
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

      const popularMovies = await getPopularMovies()

      expect(popularMovies).toEqual(movie)
    })
  })

  describe("series", () => {
    it("should return series", async () => {
      const seriesList = [
        {
          backdrop_path: "path 1",
          first_air_date: "date 1",
          genre_ids: [1],
          id: 1,
          name: "name 1",
          original_name: "name 1",
          overview: "overview 1",
          poster_path: "path 1",
          vote_average: 1,
        },
      ]

      const series = await getSeries("discover")

      expect(series).toEqual(seriesList)
    })
  })
})
