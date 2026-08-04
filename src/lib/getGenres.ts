import tmdbData from "@/config/tmdb";

export default async function getGenres() {
    const response = await fetch(`${tmdbData.BASE_URL}/genre/movie/list?api_key=${tmdbData.API_KEY}&language=pt-BR`)
    const data = await response.json()

    return data.genres
}

// const genres = data.genres.filter((genre: Genres) => genresId?.includes(genre.id))
// const currentGenres = genres.map((genre: Genres) => { return genre.name })
