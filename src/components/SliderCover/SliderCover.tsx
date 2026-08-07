"use client"

import tmdbData from "@/config/tmdb"
import { PopularMovies } from "@/types/popularMovies"

import styles from "./SliderCover.module.sass"

interface MovieList {
    selectedPopularMovies: PopularMovies[]
    currentIndex: number
    currentIndexPoster: number
}

function SliderCover({ selectedPopularMovies, currentIndex, currentIndexPoster }: MovieList) {
    return (
        <div className={styles.poster_fixed}>
            <ul className={styles.slider_container} style={{ transform: `translateX(-${currentIndexPoster}px)` }}>
                {
                    selectedPopularMovies.map((movieInfo: PopularMovies, id: number) => {

                        return (
                            <li 
                                key={movieInfo.id} 
                                className={`${styles.movie_wrapp_item} ${id === currentIndex ? `${styles.active}` : ""}`}
                            >
                                <img src={`${tmdbData.TMBD_IMG_URL_500}${movieInfo.poster_path}`} alt="poster do filme" className={styles.poster_img} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SliderCover
