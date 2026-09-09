"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { PopularMovies } from "@/types/popularMovies"
import type { Series } from "@/types/series"
import CatalogCard from "../CatalogCard/CatalogCard"

function WatchlistList() {
  const [watchlist, setWatchlist] = useState<(PopularMovies | Series)[]>([])

  useEffect(() => {
    const watchlistStorage = JSON.parse(
      localStorage.getItem("watchlist") || "[]",
    )

    setWatchlist(watchlistStorage)
  }, [])

  function handleRemove(currentId: number) {
    setWatchlist((current: (PopularMovies | Series)[]) => {
      return current.filter(
        (currentCatalog: PopularMovies | Series) =>
          currentCatalog.id !== currentId,
      )
    })
  }

  return (
    <ul className="catalog_list">
      {watchlist.length > 0 ? (
        watchlist.map((current: PopularMovies | Series) => (
          <CatalogCard
            key={current.id}
            catalog={current}
            handleRemove={handleRemove}
          />
        ))
      ) : (
        <li className="no_media_container">
          <p className="no_media_text">
            Adicione Filmes ou Séries para assistir mais tarde
          </p>

          <div className="no_media_btn_container">
            <Link href="/movies" className="no_media_btn">
              Filmes
            </Link>

            <Link href="/series" className="no_media_btn">
              Séries
            </Link>

            <Link href="/popular" className="no_media_btn">
              Populares
            </Link>
          </div>
        </li>
      )}
    </ul>
  )
}

export default WatchlistList
