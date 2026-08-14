import tmdbData from "@/config/tmdb"

export default async function getTrailer(movieId: number) {
    const response = await fetch(
        `${tmdbData.BASE_URL}/movie/${movieId}/videos?api_key=${tmdbData.API_KEY}&language=pt-BR&page=1`,
        { next: { revalidate: 3600 } }
    )

    const data = await response.json()
    const trailer = await data.results.find((video: any) => video.type === "Trailer" && video.site === "YouTube")

    if(trailer) return trailer
}
