export type MovieDetails = {
  backdrop_path: string
  budget: number
  genres: {
    id: number
    name: string
  }[]
  id: number
  origin_country: string[]
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  title: string
  video: boolean
  vote_average: number
}
