import type { Details } from "@/types/details"
import styles from "./MediaDetails.module.sass"

// import Image from "next/image"
// import tmdbData from "@/config/tmdb"

interface Prop {
  movie: Details[]
}

function MediaDetails({ movie }: Prop) {
  return movie.map((details: Details) => {
    return <div key={details.id} className={styles.details_container}></div>
  })
}

export default MediaDetails
