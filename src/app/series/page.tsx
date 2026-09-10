import { LuTv } from "react-icons/lu"
import Search from "@/components/Search/Search"
import SeriesList from "@/components/SeriesList/SeriesList"

async function Series({
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

          <LuTv />

          <h2 className="catalog_title">Séries</h2>

          <span></span>
        </div>

        <Search />
      </div>

      <SeriesList query={query} />
    </section>
  )
}

export default Series
