"use client"

import tmdbData from "@/config/tmdb"
import { PopularMovies } from "@/types/popularMovies"

import Image from "next/image"
import styles from "./SliderCover.module.sass"

interface MovieList {
    selectedPopularMovies: PopularMovies[]
}

function SliderCover({ selectedPopularMovies }: MovieList) {
    return (
        <ul className={styles.slider_container}>
            {
                selectedPopularMovies.map((movieInfo: PopularMovies) => {

                    return (
                        <li key={movieInfo.id} className={styles.movie_wrapp_item}>
                            <img src={`${tmdbData.TMBD_IMG_URL_500}${movieInfo.poster_path}`} alt="poster do filme" className={styles.poster_img} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SliderCover
