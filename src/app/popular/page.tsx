import PopularSlider from "@/components/PopularSlider/PopularSlider"
import getGenres from "@/lib/getGenres"
import getPopularMovies from "@/lib/getPopularMovies"
import styles from "./page.module.sass"

async function Popular() {
  const popularMovies = await getPopularMovies()
  const selectedPopularMovies = popularMovies.slice(10, 15)
  const genresList = await getGenres()

  return (
    <section className={styles.popular_page}>
      <PopularSlider
        selectedPopularMovies={selectedPopularMovies}
        genresList={genresList}
      />
    </section>
  )
}

export default Popular
