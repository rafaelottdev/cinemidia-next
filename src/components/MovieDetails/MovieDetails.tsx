import getCredits from "@/lib/getCredits"
import getMoviesDetails from "@/lib/getMoviesDetails"
import getTrailer from "@/lib/getTrailer"
import MediaDetails from "../MediaDetails/MediaDetails"

async function MovieDetails({ id }: { id: number }) {
  const getMovie = await getMoviesDetails(id)
  const movieTrailer = await getTrailer("movie", id)
  const movieTrailerKey = movieTrailer === undefined ? "" : movieTrailer.key
  const castData = await getCredits("movie", id)
  const castList = castData.slice(0, 4)

  return (
    <MediaDetails
      media={getMovie}
      trailerKey={movieTrailerKey}
      castList={castList}
    />
  )
}

export default MovieDetails
