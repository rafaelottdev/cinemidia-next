import getTrailer from "@/lib/getTrailer"
import styles from "./Trailer.module.sass"
import getUpComingMovies from "@/lib/getUpComingMovies"

async function Trailer() {
    const upComingMovie = await getUpComingMovies()
    const trailer = await getTrailer(upComingMovie[0].id)
    const trailerKey = trailer.key

    return (
        <section className={styles.trailer_section}>
            <div>
                <iframe src={`https://www.youtube.com/embed/${trailerKey}`}></iframe>
            </div>
        </section>
    )
}

export default Trailer
