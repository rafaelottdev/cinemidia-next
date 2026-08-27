import { Suspense } from "react"
import { LuClapperboard } from "react-icons/lu"
import CatalogLoading from "@/components/loadings/CatalogLoading/CatalogLoading"
import MovieList from "@/components/MovieList/MovieList"

async function Movies() {
  return (
    <section className="catalog_page">
      <div className="catalog_title_container">
        <div className="catalog_title_wrapp">
          <span></span>

          <LuClapperboard />

          <h2 className="catalog_title">Filmes</h2>

          <span></span>
        </div>
      </div>

      <Suspense fallback={<CatalogLoading />}>
        <MovieList />
      </Suspense>
    </section>
  )
}

export default Movies
