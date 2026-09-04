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
    return (
      <div key={details.id} className={styles.details_container}>
        <div>
          <div>
            <Image
              src={`${tmdbData.TMDB_IMG_URL}/w1280${details.poster_path}`}
              alt="filme"
              width={200}
              height={260}
              style={{ borderRadius: "10px" }}
            />

            <div>
              <h3>{details.title}</h3>

              <ul>
                <li>
                  <svg viewBox="0 0 20 19">
                    <title>icone de estrela</title>
                    <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" />
                  </svg>

                  <p>{details.vote_average}</p>
                </li>

                <li>
                  <IoMdTime />

                  <p>{formatTime(details.runtime)}</p>
                </li>

                <li>
                  <FaRegCalendarAlt />

                  <p>{formatDate(details.release_date, true)}</p>
                </li>
              </ul>

              <ul>
                {details.genres.map((genre: Genres) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h4>Sinopse</h4>

              <p>{details.overview}</p>
            </div>

            <ul>
              <li>
                <h4>Orçamento</h4>

                <p>{formatMoney.format(details.budget)}</p>
              </li>

              <li>
                <h4>Bilheteria</h4>

                <p>{formatMoney.format(details.revenue)}</p>
              </li>

              <p>
                <h4>Produzido por</h4>

                {details.production_companies.map(
                  ({ id, name }: { id: number; name: string }) => (
                    <p key={id}>{name}</p>
                  ),
                )}
              </p>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <ul>
              {castList.map((cast: Cast) => (
                <CastCard key={cast.id} cast={cast} />
              ))}
            </ul>
          </div>

          <div>
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer de um filme"
              style={{ width: "530px", height: "280px" }}
            ></iframe>
          </div>
        </div>
      </div>
    )
  })
}

export default MediaDetails
