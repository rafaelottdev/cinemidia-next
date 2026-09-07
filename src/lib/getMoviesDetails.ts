import tmdbData from "@/config/tmdb"

export default async function getMoviesDetails(movieId: number) {
  const response = await fetch(
    `${tmdbData.BASE_URL}/movie/${movieId}?api_key=${tmdbData.API_KEY}&language=pt-BR`,
    { next: { revalidate: 86400 } },
  )
  const data = [await response.json()]

  return data
}
