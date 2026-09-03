import MediaDetails from "@/components/MediaDetails/MediaDetails"
import getMoviesDetails from "@/lib/getMoviesDetails"

async function MoviePage({
  params,
}: {
  params: Promise<{ moviePage: string; id: number }>
}) {
  const { id } = await params
  const getMovie = await getMoviesDetails(id)

  return (
    <section className="media_section">
      <MediaDetails movie={getMovie} />
    </section>
  )
}

export default MoviePage
