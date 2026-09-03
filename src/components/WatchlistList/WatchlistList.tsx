"use client"

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
      {watchlist.map((current: PopularMovies | Series) => (
        <CatalogCard
          key={current.id}
          catalog={current}
          handleRemove={handleRemove}
        />
      ))}
      Adicione filmes para assistir mais tarde - ir para Filmes ou Séries
    </ul>
  )
}

export default WatchlistList

//  depois a pagina para os filmes e depois versão mobile
