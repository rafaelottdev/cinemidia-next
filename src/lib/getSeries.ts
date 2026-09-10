import tmdbData from "@/config/tmdb"

export default async function getSeries(
  type: string,
  page: number = 1,
  query: string = "",
) {
  const response = await fetch(
    `${tmdbData.BASE_URL}/${type}/tv?${query ? `${query}&` : ""}api_key=${tmdbData.API_KEY}&page=${page}`,
    { next: { revalidate: 86400 } },
  )

  const data = await response.json()

  return data.results
}
