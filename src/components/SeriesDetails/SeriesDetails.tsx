import getCredits from "@/lib/getCredits"
import getSeriesDetails from "@/lib/getSeriesDetails"
import getTrailer from "@/lib/getTrailer"
import MediaDetails from "../MediaDetails/MediaDetails"

async function SeriesDetails({ id }: { id: number }) {
  const getSeries = await getSeriesDetails(id)
  const seriesTrailer = await getTrailer("tv", id)
  const seriesTrailerKey = seriesTrailer === undefined ? "" : seriesTrailer.key
  const castData = await getCredits("tv", id)
  const castList = castData.slice(0, 4)

  return (
    <MediaDetails
      media={getSeries}
      trailerKey={seriesTrailerKey}
      castList={castList}
    />
  )
}

export default SeriesDetails
