import tmdbData from "@/config/tmdb"
import type { Trailers } from "@/types/trailers"

export default async function getTrailer(media: string, mediaId: number) {
  const response = await fetch(
    `${tmdbData.BASE_URL}/${media}/${mediaId}/videos?api_key=${tmdbData.API_KEY}&language=pt-BR&page=1`,
    { next: { revalidate: 86400 } },
  )

  const data = await response.json()
  const trailer = await data.results?.find(
    (video: Trailers) => video.type === "Trailer" && video.site === "YouTube",
  )

  if (trailer) return trailer
}
