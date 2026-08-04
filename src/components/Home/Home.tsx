import getPopularMovies from "@/lib/getPopularMovies"

import SliderBackground from "../SliderBackground/SliderBackground"
import SliderCover from "../SliderCover/SliderCover"

import styles from "./Home.module.sass"
import getGenres from "@/lib/getGenres"

async function Home() {
    const popularMovies = await getPopularMovies()
    const selectedPopularMovies = popularMovies.slice(0, 8)

    const genresList = await getGenres()

    return (
        <section className={styles.home_section}>
            <section className={styles.background_fixed}>
                <SliderBackground selectedPopularMovies={selectedPopularMovies} genresList={genresList} />
            </section>

            <section>
                <SliderCover />
            </section>
        </section>
    )
}

export default Home
