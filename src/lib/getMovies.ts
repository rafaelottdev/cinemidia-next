import tmdbData from "@/config/tmdb"

export default async function getMovies(qtdePages: number) {
  const movieList = []

  for(let page = 1; page <= qtdePages; page++) {
    const response = await fetch(
      `${tmdbData.BASE_URL}/discover/movie?api_key=${tmdbData.API_KEY}&page=${page}`,
      { next: { revalidate: 86400 } },
    )

    const data = await response.json()

    movieList.push(... data.results)
  }

  return movieList
}
