import SeriesDetails from "@/components/SeriesDetails/SeriesDetails"

async function SeriesPage({
  params,
}: {
  params: Promise<{ seriesPage: string; id: number }>
}) {
  const { id } = await params

  return (
    <section className="media_section">
      <SeriesDetails id={id} />
    </section>
  )
}

export default SeriesPage
