import { LuTv } from "react-icons/lu"
import SeriesList from "@/components/seriesList/SeriesList"

async function Series() {
  return (
    <section className="catalog_page">
      <div className="catalog_title_container">
        <div className="catalog_title_wrapp">
          <span></span>

          <LuTv />

          <h2 className="catalog_title">Séries</h2>

          <span></span>
        </div>
      </div>

      <SeriesList />
    </section>
  )
}

export default Series
