import { LuClapperboard } from "react-icons/lu"
import MovieList from "@/components/MovieList/MovieList"
import styles from "./page.module.sass"

async function Movies() {
  return (
    <section className={styles.movies_page}>
      <div className={styles.movies_title_container}>
        <div className={styles.movies_title_wrapp}>
          <span></span>

          <LuClapperboard />

          <h2 className={styles.movies_title}>Filmes</h2>

          <span></span>
        </div>
      </div>

      <MovieList />
    </section>
  )
}

export default Movies
