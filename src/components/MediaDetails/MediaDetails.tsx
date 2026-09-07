import Image from "next/image"
import { FaCircle, FaRegCalendarAlt } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa6"
import { IoMdTime } from "react-icons/io"
import tmdbData from "@/config/tmdb"
import formatDate from "@/lib/formatDate"
import type { Cast } from "@/types/cast"
import type { Genres } from "@/types/genres"
import type { MovieDetails } from "@/types/movieDetails"
import type { SeriesDetails } from "@/types/seriesDetails"
import CastCard from "../CastCard/CastCard"
import styles from "./MediaDetails.module.sass"

interface Prop {
  media: MovieDetails[] | SeriesDetails[]
  trailerKey: string
  castList: Cast[]
}

async function MediaDetails({ media, trailerKey, castList }: Prop) {
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

  return media.map((details: MovieDetails | SeriesDetails) => {
    const selectedGenres = details.genres.slice(0, 3)

    return (
      <div key={details.id} className={styles.details_container}>
        <div className={styles.left_container}>
          <div className={styles.info_top}>
            <Image
              src={`${tmdbData.TMDB_IMG_URL}/w1280${details.poster_path}`}
              alt={`Capa ${"title" in details ? `do filme ${details.title}` : `da série ${details.name}`}`}
              width={200}
              height={260}
              className={styles.movie_poster}
            />

            <div className={styles.movie_info_top}>
              <h3 className={styles.movie_title}>
                {"title" in details ? details.title : details.name}
              </h3>

              <ul className={styles.movie_info_list}>
                <li className={styles.movie_info_item}>
                  <svg viewBox="0 0 20 19">
                    <title>icone de estrela</title>
                    <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" />
                  </svg>

                  <p>{details.vote_average.toFixed(1) ?? "0.0"}</p>
                </li>

                <li className={styles.movie_info_item}>
                  {"runtime" in details ? (
                    <IoMdTime />
                  ) : details.episode_run_time.length > 0 ? (
                    <IoMdTime />
                  ) : (
                    <FaCircle
                      className={`${details.in_production ? styles.active : styles.finished}`}
                    />
                  )}

                  <p>
                    {"runtime" in details
                      ? formatTime(details.runtime)
                      : details.episode_run_time.length > 0
                        ? formatTime(details.episode_run_time[0])
                        : details.in_production
                          ? "Ativo"
                          : "Finalizado"}
                  </p>
                </li>

                <li className={styles.movie_info_item}>
                  <FaRegCalendarAlt />

                  <p>
                    {"release_date" in details
                      ? formatDate(details.release_date, true)
                      : formatDate(details.first_air_date, true)}
                  </p>
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
                <h4>{"budget" in details ? "Orçamento" : "Temporadas"}</h4>

                <p>
                  {"budget" in details
                    ? details.budget === 0
                      ? "Sem Info"
                      : formatMoney.format(details.budget)
                    : details.number_of_seasons}
                </p>
              </li>

              <li>
                <h4>{"revenue" in details ? "Bilheteria" : "Disponivel"}</h4>

                <p>
                  {"revenue" in details
                    ? details.revenue === 0
                      ? "Sem Info"
                      : formatMoney.format(details.revenue)
                    : details.networks[0].name}
                </p>
              </li>

              <li>
                <h4>Pais de Origem</h4>

                <p>{details.origin_country}</p>
              </li>

              <li>
                <h4>Nome Original</h4>

                <p>
                  {"original_title" in details
                    ? details.original_title
                    : details.original_name}
                </p>
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
            {trailerKey ? (
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title={`Trailer do filme ${"title" in details ? details.title : details.name}`}
              ></iframe>
            ) : (
              <div className={styles.trailerMissing}>
                <FaYoutube />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  })
}

export default MediaDetails
