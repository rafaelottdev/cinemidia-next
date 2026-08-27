import { Suspense } from "react"
import PopularLoading from "@/components/loadings/PopularLoading/PopularLoading"
import PopularWrapper from "@/components/PopularWrapper/PopularWrapper"
import styles from "./page.module.sass"

async function Popular() {
  return (
    <section className={styles.popular_page}>
      <Suspense fallback={<PopularLoading />}>
        <PopularWrapper />
      </Suspense>
    </section>
  )
}

export default Popular
