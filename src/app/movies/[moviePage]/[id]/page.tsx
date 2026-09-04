import MediaDetails from "@/components/MediaDetails/MediaDetails"
import getCredits from "@/lib/getCredits"
import getMoviesDetails from "@/lib/getMoviesDetails"
import getTrailer from "@/lib/getTrailer"

async function MoviePage({
  params,
}: {
  params: Promise<{ moviePage: string; id: number }>
}) {
  const { id } = await params
  const getMovie = await getMoviesDetails(id)
  const movieTrailer = await getTrailer(id)
  const movieTrailerKey: string = movieTrailer.key
  const castData = await getCredits("movie", id)
  const castList = castData.slice(0, 4)

  return (
    <section className="media_section">
      <MediaDetails
        movie={getMovie}
        trailerKey={movieTrailerKey}
        castList={castList}
      />
    </section>
  )
}

export default MoviePage
