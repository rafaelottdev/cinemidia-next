import tmdbData from "@/config/tmdb"
import { PopularMovies } from "@/types/popularMovies"
import { Genres } from "@/types/genres"
import Link from "next/link"

import styles from "./ReleaseCard.module.sass"


interface MovieList {
    movie: PopularMovies
    currentGenres: Genres[]
}

function ReleaseCard({ movie, currentGenres }: MovieList) {
    function formatDate(dateString: string) {
        if(!dateString) return 'Sem Data'

        const date = new Date(dateString)

        return date.toLocaleDateString('pt-br', {
            day: 'numeric',
            month: 'long'
        })
    }

    return (
        <li className={styles.movie_card}>
            <Link href="/" className={styles.movie_link}>
                <div className={styles.img_wrapp}>
                    <img src={`${tmdbData.TMBD_IMG_URL_500}${movie.poster_path}`} alt="poster do filme" width={50} height={50} />
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
                            {
                                currentGenres.map((genre: Genres) => (
                                    <li key={genre.id}>
                                        {genre.name}
                                    </li>
                                ))
                            }
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
