import type { PopularMovies } from "@/types/popularMovies"

interface Movie {
  movie: PopularMovies
}

function Card({ movie }: Movie) {
  return <div>{movie.title}</div>
}

export default Card
