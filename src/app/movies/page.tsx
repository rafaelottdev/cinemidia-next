import { LuClapperboard } from "react-icons/lu"
import MovieList from "@/components/MovieList/MovieList"
import Search from "@/components/Search/Search"

async function Movies({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>
}) {
  const params = await searchParams
  const query = params?.query || ""

  return (
    <section className="catalog_page">
      <div className="catalog_title_container">
        <div className="catalog_title_wrapp">
          <span></span>

          <LuClapperboard />

          <h2 className="catalog_title">Filmes</h2>

          <span></span>
        </div>

        <Search />
      </div>

      <MovieList query={query} />
    </section>
  )
}

export default Movies

// search -> fazer a pagina (s) de not-found -> mobile // estudar testes detarde !MUITO IMPORTANTE
