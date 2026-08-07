import getPopularMovies from "@/lib/getPopularMovies"
import getGenres from "@/lib/getGenres"

import HomeSlider from "../HomeSlider/HomeSlider"

import styles from "./Home.module.sass"

async function Home() {
    // Fake delay function
    await new Promise((resolve) => setTimeout(resolve, 100000))

    const popularMovies = await getPopularMovies()

    const selectedPopularMovies = popularMovies.slice(0, 8)
    const genresList = await getGenres()

    return (
        <section className={styles.home_section}>
            <div className={styles.home_wrapp}>
                <HomeSlider selectedPopularMovies={selectedPopularMovies} genresList={genresList} />
            </div>
        </section>
    )
}

export default Home
