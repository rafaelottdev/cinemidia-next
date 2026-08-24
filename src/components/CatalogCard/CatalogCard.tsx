import Image from "next/image"
import Link from "next/link"
import { FaRegBookmark } from "react-icons/fa"
import { IoAddOutline } from "react-icons/io5"
import tmdbData from "@/config/tmdb"
import formatDate from "@/lib/formatDate"
import type { PopularMovies } from "@/types/popularMovies"
import type { Series } from "@/types/series"
import styles from "./CatalogCard.module.sass"

interface Catalog {
  catalog: PopularMovies | Series
}

function Card({ catalog }: Catalog) {
  return (
    <li>
      <Link href="/" className={styles.movie_container}>
        <div className={styles.movie_img_wrapp}>
          <Image
            src={`${tmdbData.TMBD_IMG_URL_300}${catalog.poster_path}`}
            alt={`Imagem do filme ${"title" in catalog ? catalog.title : catalog.name}`}
            width={200}
            height={270}
          />

          <button type="button" className={styles.add_watchlist_btn}>
            <div>
              <span className={styles.icon_wrapp}>
                <IoAddOutline />
              </span>

              <span className={styles.icon_wrapp}>
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

export default Card
