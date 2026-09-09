export type SeriesDetails = {
  backdrop_path: string
  episode_run_time: number[]
  first_air_date: string
  genres: { id: number; name: string }[]
  id: number
  in_production: boolean
  name: string
  networks: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  number_of_seasons: number
  origin_country: string[]
  original_name: string
  overview: string
  poster_path: string
  vote_average: number
}
