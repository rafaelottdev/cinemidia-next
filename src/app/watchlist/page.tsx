import { FaRegBookmark } from "react-icons/fa"
import WatchlistList from "@/components/WatchlistList/WatchlistList"

function Watchlist() {
  return (
    <section className="catalog_page">
      <div className="catalog_title_container">
        <div className="catalog_title_wrapp">
          <span></span>

          <FaRegBookmark />

          <h2 className="catalog_title">Watchlist</h2>

          <span></span>
        </div>
      </div>

      <WatchlistList />
    </section>
  )
}

export default Watchlist
