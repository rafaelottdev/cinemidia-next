"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { TbShare3 } from "react-icons/tb"
import tmdbData from "@/config/tmdb"
import { leftClick } from "@/lib/leftClick"
import { rightClick } from "@/lib/rightClick"
import type { Genres } from "@/types/genres"
import type { PopularMovies } from "@/types/popularMovies"
import styles from "./PopularSlider.module.sass"

interface TmdbData {
  selectedPopularMovies: PopularMovies[]
  genresList: Genres[]
}

function PopularSlider({ selectedPopularMovies, genresList }: TmdbData) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const popularMoviesLength = selectedPopularMovies.length - 1

  return (
    <div className={styles.slider_container}>
      <button
        type="button"
        className={`${styles.slider_control_btn} ${currentIndex <= 0 ? styles.blocked : ""}`}
        onClick={() => leftClick(currentIndex, setCurrentIndex)}
      >
        <svg viewBox="0 0 13 13">
          <title>Seta de controle para a esquerda</title>
          <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z" />
        </svg>
      </button>

      <ul
        className={styles.slider_list}
        style={{ transform: `translateX(-${currentIndex * 1000}px)` }}
      >
        {selectedPopularMovies.map((movie) => {
          const backgroundUrl = `${tmdbData.TMDB_IMG_URL}/w1280${movie.backdrop_path}`
          const posterUrl = `${tmdbData.TMDB_IMG_URL}/w185${movie.poster_path}`
          const currentGenres = genresList
            .filter((genre: Genres) => movie.genre_ids.includes(genre.id))
            .slice(0, 3)

          return (
            <li key={movie.id} className={styles.slider_item}>
              <Image
                src={backgroundUrl}
                alt={`fundo do filme ${movie.title}`}
                width={1000}
                height={500}
                className={styles.background_img}
              />

              <div className={styles.movie_data}>
                <h3 className={styles.movie_title}>{movie.title}</h3>

                <div className={styles.movie_info}>
                  <p className={styles.movie_overview}>{movie.overview}</p>

                  <ul className={styles.movie_genres_list}>
                    {currentGenres.map((genre: Genres) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.poster_wrapp}>
                <Image
                  src={posterUrl}
                  alt={`Poster do filme ${movie.title}`}
                  width={80}
                  height={100}
                />

                <Link href="/" className={styles.see_more_link}>
                  <span>Ver Mais</span>

                  <span>
                    <TbShare3 />
                  </span>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        className={`${styles.slider_control_btn} ${currentIndex >= popularMoviesLength ? styles.blocked : ""}`}
        onClick={() =>
          rightClick(currentIndex, setCurrentIndex, popularMoviesLength)
        }
      >
        <svg viewBox="0 0 13 13" style={{ transform: "rotateY(180deg)" }}>
          <title>Seta de controle para a direita</title>
          <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z" />
        </svg>
      </button>
    </div>
  )
}

export default PopularSlider
