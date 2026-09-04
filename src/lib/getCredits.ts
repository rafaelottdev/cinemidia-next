import tmdbData from "@/config/tmdb"

export default async function getCredits(media: string, movieId: number) {
  const response = await fetch(
    `${tmdbData.BASE_URL}/${media}/${movieId}/credits?api_key=${tmdbData.API_KEY}&language=pt-BR`,
  )
  const data = await response.json()

  return data.cast
}
