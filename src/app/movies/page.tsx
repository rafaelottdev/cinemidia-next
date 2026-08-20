import MovieList from "@/components/MovieList/MovieList"
import styles from "./page.module.sass"

async function Movies() {
  return (
    <section className={styles.movies_page}>
      <div>
        <h2>Filmes</h2>
      </div>

      <MovieList />
    </section>
  )
}

export default Movies

// nome em baixo, data de lançamento em baixo do nome e do lado o mais para adicionar a watchlist ou dentro da capa do filme mas na direita em baixo, ao clicar vai pra pagina do filme
