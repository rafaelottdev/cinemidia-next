import tmdbData from "@/config/tmdb"

export default async function getMovies(page: number) {
  const response = await fetch(
    `${tmdbData.BASE_URL}/discover/movie?api_key=${tmdbData.API_KEY}&page=${page}`,
    { next: { revalidate: 86400 } },
  )

  const data = await response.json()

  return data.results
}
