import MovieList from "@/components/MovieList/MovieList"
import getMovies from "@/lib/getMovies"
import styles from "./page.module.sass"

async function Movies() {
  const movies = await getMovies(20)

  return (
    <section className={styles.movies_page}>
      <div>
        <h2>Filmes</h2>
      </div>

      <MovieList movies={movies} />
    </section>
  )
}

export default Movies

// nome em baixo, data de lançamento em baixo do nome e do lado o mais para adicionar a watchlist ou dentro da capa do filme mas na direita em baixo, ao clicar vai pra pagina do filme
// todos os filmes irão ficar em movies, o que vai mudar vai ser a quantidade renderizada, que será indicada pelo currentPage, vamos precisar controlar no map, mas tem que ser em tempo real
