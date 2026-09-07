import tmdbData from "@/config/tmdb"

export default async function getSeriesDetails(seriesId: number) {
  const response = await fetch(
    `${tmdbData.BASE_URL}/tv/${seriesId}?api_key=${tmdbData.API_KEY}&language=pt-BR`,
    { next: { revalidate: 86400 } },
  )
  const data = [await response.json()]

  return data
}
