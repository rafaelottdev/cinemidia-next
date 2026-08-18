import Image from "next/image"
import tmdbData from "@/config/tmdb"
import getGenres from "@/lib/getGenres"
import getUpComingMovies from "@/lib/getUpComingMovies"
import type { Genres } from "@/types/genres"
import type { PopularMovies } from "@/types/popularMovies"
import ReleaseCard from "../ReleaseCard/ReleaseCard"
import styles from "./Releases.module.sass"

async function Releases() {
  const upComingMovies = await getUpComingMovies()
  const selectedUpComingMovies = upComingMovies.slice(0, 4)

  const genres = await getGenres()

  return (
    <section
      className={styles.releases_section}
      style={{
        backgroundImage: `url(${tmdbData.TMDB_IMG_URL}/w1280${selectedUpComingMovies[0].backdrop_path})`,
      }}
    >
      <ul className={styles.release_list}>
        {selectedUpComingMovies.map((movie: PopularMovies) => {
          const currentGenres = genres
            .filter((genre: Genres) => movie.genre_ids.includes(genre.id))
            .slice(0, 3)

          return (
            <ReleaseCard
              key={movie.id}
              movie={movie}
              currentGenres={currentGenres}
            />
          )
        })}
      </ul>

      <div className={styles.bg_bow}>
        <Image src="/arco.png" alt="fundo" width={1000} height={60} />
      </div>
    </section>
  )
}

export default Releases
