import Image from "next/image"
import Link from "next/link"
import tmdbData from "@/config/tmdb"
import formatDate from "@/lib/formatDate"
import formatTitle from "@/lib/formatTitle"
import type { Genres } from "@/types/genres"
import type { PopularMovies } from "@/types/popularMovies"
import styles from "./ReleaseCard.module.sass"

interface MovieList {
  movie: PopularMovies
  currentGenres: Genres[]
}

function ReleaseCard({ movie, currentGenres }: MovieList) {
  return (
    <li className={styles.movie_card}>
      <Link
        href={`movies/${formatTitle(movie.title)}/${movie.id}`}
        className={styles.movie_link}
      >
        <div className={styles.img_wrapp}>
          <Image
            src={`${tmdbData.TMBD_IMG_URL_300}${movie.poster_path}`}
            alt="poster do filme"
            width={500}
            height={500}
          />
        </div>

        <div className={styles.movie_data}>
          <div className={styles.movie_info}>
            <h2>{movie.title}</h2>

            <div className={styles.movie_description}>
              <p>{movie.overview}</p>

              <span>...</span>
            </div>
          </div>

          <div className={styles.genres_wrapp}>
            <ul className={styles.genres_list}>
              {currentGenres.map((genre: Genres) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.release_date}>
          {formatDate(movie.release_date)}
        </div>
      </Link>
    </li>
  )
}

export default ReleaseCard
