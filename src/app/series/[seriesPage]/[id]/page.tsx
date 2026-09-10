import { Suspense } from "react"
import MediaDetailsLoading from "@/components/loadings/MediaDetailsLoading/MediaDetailsLoading"
import SeriesDetails from "@/components/SeriesDetails/SeriesDetails"

async function SeriesPage({
  params,
}: {
  params: Promise<{ seriesPage: string; id: number }>
}) {
  const { id } = await params

  return (
    <section className="media_section">
      <Suspense fallback={<MediaDetailsLoading />}>
        <SeriesDetails id={id} />
      </Suspense>
    </section>
  )
}

export default SeriesPage
