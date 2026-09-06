import Image from "next/image"
import { FaRegCalendarAlt } from "react-icons/fa"
import { IoMdTime } from "react-icons/io"
import tmdbData from "@/config/tmdb"
import formatDate from "@/lib/formatDate"
import type { Cast } from "@/types/cast"
import type { Details } from "@/types/details"
import type { Genres } from "@/types/genres"
import CastCard from "../CastCard/CastCard"
import styles from "./MediaDetails.module.sass"

interface Prop {
  movie: Details[]
  trailerKey: string
  castList: Cast[]
}

function MediaDetails({ movie, trailerKey, castList }: Prop) {
  const formatTime = (totalMinutes: number) => {
    const hours: number = Math.floor(totalMinutes / 60)
    const minutes: number = totalMinutes % 60

    return `${hours}h e ${minutes}min`
  }

  const formatMoney = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    notation: "compact",
  })

  return movie.map((details: Details) => {
    const selectedGenres = details.genres.slice(0, 3)

    return (
      <div key={details.id} className={styles.details_container}>
        <div className={styles.left_container}>
          <div className={styles.info_top}>
            <Image
              src={`${tmdbData.TMDB_IMG_URL}/w1280${details.poster_path}`}
              alt="filme"
              width={200}
              height={260}
              className={styles.movie_poster}
            />

            <div className={styles.movie_info_top}>
              <h3 className={styles.movie_title}>{details.title}</h3>

              <ul className={styles.movie_info_list}>
                <li className={styles.movie_info_item}>
                  <svg viewBox="0 0 20 19">
                    <title>icone de estrela</title>
                    <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" />
                  </svg>

                  <p>{details.vote_average.toFixed(1) ?? "0.0"}</p>
                </li>

                <li className={styles.movie_info_item}>
                  <IoMdTime />

                  <p>{formatTime(details.runtime)}</p>
                </li>

                <li className={styles.movie_info_item}>
                  <FaRegCalendarAlt />

                  <p>{formatDate(details.release_date, true)}</p>
                </li>
              </ul>

              <ul className={styles.movie_genres_list}>
                {selectedGenres.map((genre: Genres) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.info_bottom}>
            <div className={styles.synopsis_container}>
              <p>{details.overview}</p>
            </div>

            <ul className={styles.movie_data_list}>
              <li>
                <h4>Orçamento</h4>

                <p>{formatMoney.format(details.budget)}</p>
              </li>

              <li>
                <h4>Bilheteria</h4>

                <p>{formatMoney.format(details.revenue)}</p>
              </li>

              <li>
                <h4>Pais de Origem</h4>

                <p>{details.origin_country}</p>
              </li>

              <li>
                <h4>Nome Original</h4>

                <p>{details.original_title}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.right_container}>
          <div className={styles.cast_container}>
            <ul className={styles.cast_list}>
              {castList.map((cast: Cast) => (
                <CastCard key={cast.id} cast={cast} />
              ))}
            </ul>
          </div>

          <div className={styles.trailer_container}>
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer de um filme"
            ></iframe>
          </div>
        </div>
      </div>
    )
  })
}

export default MediaDetails
