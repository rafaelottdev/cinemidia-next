import getTrailer from "@/lib/getTrailer"
import getUpComingMovies from "@/lib/getUpComingMovies"
import styles from "./Trailer.module.sass"

async function Trailer() {
  const upComingMovie = await getUpComingMovies()
  const trailer = await getTrailer(upComingMovie[0].id)
  const trailerKey: string = trailer.key

  return (
    <section className={styles.trailer_section}>
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Trailer de um filme"
        ></iframe>
      </div>
    </section>
  )
}

export default Trailer
