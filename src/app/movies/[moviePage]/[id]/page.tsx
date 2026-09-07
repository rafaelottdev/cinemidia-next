import { Suspense } from "react"
import MediaDetailsLoading from "@/components/loadings/MediaDetailsLoading/MediaDetailsLoading"
import MovieDetails from "@/components/MovieDetails/MovieDetails"

async function MoviePage({
  params,
}: {
  params: Promise<{ moviePage: string; id: number }>
}) {
  const { id } = await params

  return (
    <section className="media_section">
      <Suspense fallback={<MediaDetailsLoading />}>
        <MovieDetails id={id} />
      </Suspense>
    </section>
  )
}

export default MoviePage
