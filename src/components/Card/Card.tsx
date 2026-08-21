import Image from "next/image"
import Link from "next/link"
import { FaRegBookmark } from "react-icons/fa"
import { IoAddOutline } from "react-icons/io5"
import tmdbData from "@/config/tmdb"
import formatDate from "@/lib/formatDate"
import type { PopularMovies } from "@/types/popularMovies"
import styles from "./Card.module.sass"

interface Movie {
  movie: PopularMovies
}

function Card({ movie }: Movie) {
  return (
    <li>
      <Link href="/" className={styles.movie_container}>
        <div className={styles.movie_img_wrapp}>
          <Image
            src={`${tmdbData.TMBD_IMG_URL_500}${movie.poster_path}`}
            alt={`Imagem do ${movie.title}`}
            width={200}
            height={280}
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
            <p>{movie.title}</p>
          </div>

          <p className={styles.movie_release_date}>
            {formatDate(movie.release_date, true)}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default Card
