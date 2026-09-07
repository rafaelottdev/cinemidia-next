import Image from "next/image"
import tmdbData from "@/config/tmdb"
import type { Cast } from "@/types/cast"
import styles from "./CastCard.module.sass"

interface Prop {
  cast: Cast
}

function CastCard({ cast }: Prop) {
  const url = cast.profile_path
    ? `${tmdbData.TMDB_IMG_URL}/w45/${cast.profile_path}`
    : "/perfil.jpg"

  return (
    <li className={styles.cast_item}>
      <div className={styles.cast_img_wrapp}>
        <Image
          src={url}
          alt={`Foto do(a) ${cast.original_name}`}
          width={50}
          height={50}
        />
      </div>

      <div className={styles.cast_name_wrapp}>
        <p>{cast.original_name}</p>

        <p>{cast.character}</p>
      </div>
    </li>
  )
}

export default CastCard
