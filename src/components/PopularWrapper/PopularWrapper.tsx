import PopularSlider from "@/components/PopularSlider/PopularSlider"
import getGenres from "@/lib/getGenres"
import getPopularMovies from "@/lib/getPopularMovies"

async function PopularWrapper() {
  const popularMovies = await getPopularMovies()
  const selectedPopularMovies = popularMovies.slice(10, 15)
  const genresList = await getGenres()

  return (
    <PopularSlider
      selectedPopularMovies={selectedPopularMovies}
      genresList={genresList}
    />
  )
}

export default PopularWrapper
