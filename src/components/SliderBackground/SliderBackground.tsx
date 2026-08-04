"use client"

import tmdbData from "@/config/tmdb"
import { PopularMovies } from "@/types/popularMovies"
import { Genres } from "@/types/genres"

import { useEffect } from "react"

import styles from "./SliderBackground.module.sass"

interface MovieList {
    selectedPopularMovies: PopularMovies[]
    genresList: Genres[]
}

function SliderBackground({ selectedPopularMovies, genresList }: MovieList) {
    return (
        <ul className={styles.slider_container}>
            {
                selectedPopularMovies.map((movieInfo: PopularMovies) => {
                    const currentGenres = genresList.filter((genre: Genres) => movieInfo.genre_ids.includes(genre.id)).slice(0, 3)

                    return (
                        <li key={movieInfo.id} className={styles.movie_wrapp_item}>
                            <div
                                style={{ 
                                    backgroundImage: `url(${tmdbData.TMDB_IMG_URL}/original${movieInfo.backdrop_path})` 
                                }}
                                
                                className={styles.movie_img}
                            >
                            </div>

                            <div className={styles.movie_info_container}>
                                <h1 className={styles.movie_title}>{movieInfo.title}</h1>

                                <div className={styles.movie_data}>
                                    <div className={styles.movie_rate}>
                                        {movieInfo.vote_average}
                                    </div>

                                    <ul className={styles.movie_genres}>
                                        {
                                            currentGenres.map((genre: Genres, id: number) => (
                                                <li key={id}>{genre.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SliderBackground
