import tmdbData from "@/config/tmdb";

export default async function getGenres() {
    const response = await fetch(
        `${tmdbData.BASE_URL}/genre/movie/list?api_key=${tmdbData.API_KEY}&language=pt-BR`, 
        { next: { revalidate: 3600 } }
    )
    const data = await response.json()

    return data.genres
}
