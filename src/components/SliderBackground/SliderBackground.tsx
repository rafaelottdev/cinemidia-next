"use client"

import tmdbData from "@/config/tmdb"
import { PopularMovies } from "@/types/popularMovies"
import { Genres } from "@/types/genres"

import styles from "./SliderBackground.module.sass"

interface MovieList {
    selectedPopularMovies: PopularMovies[]
    genresList: Genres[]
}

function SliderBackground({ selectedPopularMovies, genresList }: MovieList) {
    return (
        <div className={styles.background_fixed}>
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
                                            { movieInfo.vote_average?.toFixed(1) ?? '0.0' }

                                            <svg viewBox="0 0 20 19">
                                                <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"/>
                                            </svg>
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
        </div>
    )
}

export default SliderBackground
