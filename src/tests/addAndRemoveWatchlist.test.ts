import { describe, expect, it } from "vitest"
import { addMovieWatchlist } from "@/lib/addMovieWatchlist"
import { removeMovieWatchlist } from "@/lib/removeMovieWatchlist"
import type { PopularMovies } from "@/types/popularMovies"

describe("Check watchlist", () => {
  describe("add", () => {
    it("Check if it is being added.", () => {
      const movie: PopularMovies = {
        backdrop_path: "string",
        genre_ids: [1],
        id: 1,
        original_title: "string",
        overview: "string",
        popularity: 1,
        poster_path: "string",
        release_date: "string",
        title: "string",
        video: true,
        vote_average: 1,
        vote_count: 2,
      }

      localStorage.setItem("watchlist", JSON.stringify([]))

      addMovieWatchlist(movie)

      const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]")

      expect(watchlist).toEqual([movie])
    })

    it("Checks if it exists; if so, it will not be added.", () => {
      const movie: PopularMovies = {
        backdrop_path: "string",
        genre_ids: [1],
        id: 1,
        original_title: "string",
        overview: "string",
        popularity: 1,
        poster_path: "string",
        release_date: "string",
        title: "string",
        video: true,
        vote_average: 1,
        vote_count: 2,
      }

      localStorage.setItem("watchlist", JSON.stringify([movie]))

      addMovieWatchlist(movie)

      const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]")

      expect(watchlist).toHaveLength(1)
    })
  })

  describe("remove", () => {
    it("Check if it is removing.", () => {
      const movie: PopularMovies = {
        backdrop_path: "string",
        genre_ids: [1],
        id: 1,
        original_title: "string",
        overview: "string",
        popularity: 1,
        poster_path: "string",
        release_date: "string",
        title: "string",
        video: true,
        vote_average: 1,
        vote_count: 2,
      }

      localStorage.setItem("watchlist", JSON.stringify([movie]))

      removeMovieWatchlist(movie)

      const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]")

      expect(watchlist).toHaveLength(0)
    })
  })
})
