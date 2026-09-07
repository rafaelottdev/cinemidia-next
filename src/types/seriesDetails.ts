export type SeriesDetails = {
  adult: boolean
  backdrop_path: string
  episode_run_time: number[]
  first_air_date: string
  genres: { id: number; name: string }[]
  id: number
  in_production: boolean
  languages: string[]
  name: string
  networks: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}
