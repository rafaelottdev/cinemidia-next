"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaRegBookmark } from "react-icons/fa"
import { FiMinus } from "react-icons/fi"
import { IoAddOutline } from "react-icons/io5"
import tmdbData from "@/config/tmdb"
import { addMovieWatchlist } from "@/lib/addMovieWatchlist"
import formatDate from "@/lib/formatDate"
import formatTitle from "@/lib/formatTitle"
import { removeMovieWatchlist } from "@/lib/removeMovieWatchlist"
import type { PopularMovies } from "@/types/popularMovies"
import type { Series } from "@/types/series"
import styles from "./CatalogCard.module.sass"

interface Catalog {
  catalog: PopularMovies | Series
  handleRemove?: (currentId: number) => void
}

function CatalogCard({ catalog, handleRemove }: Catalog) {
  const [watchlist, setWatchlist] = useState<boolean>(false)

  useEffect(() => {
    const watchlistStorage = JSON.parse(
      localStorage.getItem("watchlist") || "[]",
    )
    const exists = watchlistStorage.some(
      (current: PopularMovies | Series) => current.id === catalog.id,
    )

    setWatchlist(exists)
  }, [catalog.id])

  function toggleWatchlist(currentCatalog: PopularMovies | Series) {
    if (watchlist) {
      removeMovieWatchlist(currentCatalog)
      handleRemove?.(currentCatalog.id)
      setWatchlist(false)
    } else {
      addMovieWatchlist(currentCatalog)
      setWatchlist(true)
    }
  }

  return (
    <li>
      <Link
        href={`
          ${"title" in catalog ? `movies/${formatTitle(catalog.title)}/${catalog.id}` : `series/${formatTitle(catalog.name)}/${catalog.id}`}/
        `}
        className={styles.movie_container}
      >
        <div className={styles.movie_img_wrapp}>
          <Image
            src={`${tmdbData.TMBD_IMG_URL_300}${catalog.poster_path}`}
            alt={`Imagem do filme ${"title" in catalog ? catalog.title : catalog.name}`}
            width={200}
            height={270}
          />

          <button
            type="button"
            className={`${styles.base_watchlist_btn} ${watchlist ? styles.remove_watchlist_btn : styles.add_watchlist_btn}`}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              toggleWatchlist(catalog)
            }}
          >
            <div>
              <span
                className={`${styles.base_icon_wrapp} ${watchlist ? styles.selected : styles.icon_wrapp}`}
              >
                {watchlist ? <FiMinus /> : <IoAddOutline />}
              </span>

              <span
                className={`${styles.base_icon_wrapp} ${watchlist ? styles.selected : styles.icon_wrapp}`}
              >
                <FaRegBookmark />
              </span>
            </div>
          </button>
        </div>

        <div className={styles.movie_footer}>
          <div className={styles.movie_title_container}>
            <p>{"title" in catalog ? catalog.title : catalog.name}</p>
          </div>

          <p className={styles.movie_release_date}>
            {"release_date" in catalog
              ? formatDate(catalog.release_date, true)
              : (catalog.vote_average?.toFixed(1) ?? "0.0")}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default CatalogCard
