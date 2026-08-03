import getPopularMovies from "@/lib/getPopularMovies"

import styles from "./Home.module.sass"
import SliderBackground from "../SliderBackground/SliderBackground"

async function Home() {
    const popularMovies = await getPopularMovies()
    const selectedPopularMovies = popularMovies.slice(0, 8)

    return (
        <section className={styles.home_section}>
            <section className={styles.background_fixed}>
                <SliderBackground selectedPopularMovies={selectedPopularMovies} />
            </section>

            <section></section>
        </section>
    )
}

export default Home
