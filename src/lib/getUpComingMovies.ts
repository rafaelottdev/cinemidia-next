import tmdbData from "@/config/tmdb"

export default async function getUpComingMovies() {
    const response = await fetch(
        `${tmdbData.BASE_URL}/movie/upcoming?api_key=${tmdbData.API_KEY}&language=pt-BR&page=1`,
        { next: { revalidate: 3600 } }
    )
    
    const data = await response.json()

    return data.results
}
