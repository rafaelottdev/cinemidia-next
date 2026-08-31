import type { PopularMovies } from "@/types/popularMovies"
import type { Series } from "@/types/series"

export function addMovieWatchlist(movie: PopularMovies | Series) {
  const watchlistStorage = JSON.parse(localStorage.getItem("watchlist") || "[]")

  const watchlist = watchlistStorage

  const exists = watchlist.find(
    (currentMovie: PopularMovies) => currentMovie.id === movie.id,
  )

  if (!exists) {
    watchlist.push({ ...movie })
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }
}
