"use client"

import tmdbData from "@/config/tmdb"
import { PopularMovies } from "@/types/popularMovies"

import styles from "./SliderBackground.module.sass"

function SliderBackground({ selectedPopularMovies }: { selectedPopularMovies: PopularMovies[] }) {
    return (
        <ul className={styles.slider_container}>
            {
                selectedPopularMovies.map((movieInfo: any) => (
                    <li key={movieInfo.id} className={styles.movie_wrapp_item}>
                        <div
                            style={{ 
                                backgroundImage: `url(${tmdbData.TMDB_IMG_URL}/original${movieInfo.backdrop_path})` 
                            }}
                            
                            className={styles.movie_img}
                        >
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default SliderBackground
