import type { PopularMovies } from "@/types/popularMovies"
import type { Series } from "@/types/series"

export function removeMovieWatchlist(movie: PopularMovies | Series) {
  const watchlistStorage = JSON.parse(localStorage.getItem("watchlist") || "[]")

  const newWatchlistStorage = watchlistStorage.filter(
    (currentMovie: PopularMovies) => currentMovie.id !== movie.id,
  )

  localStorage.setItem("watchlist", JSON.stringify(newWatchlistStorage))
}
