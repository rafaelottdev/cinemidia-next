import { Suspense } from "react"
import MediaDetailsLoading from "@/components/loadings/MediaDetailsLoading/MediaDetailsLoading"
import MediaDetails from "@/components/MediaDetails/MediaDetails"

async function MoviePage({
  params,
}: {
  params: Promise<{ moviePage: string; id: number }>
}) {
  const { id } = await params

  return (
    <section className="media_section">
      <Suspense fallback={<MediaDetailsLoading />}>
        <MediaDetails id={id} />
      </Suspense>
    </section>
  )
}

export default MoviePage
