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
          alt={`Foto ${cast.original_name}`}
          width={50}
          height={50}
        />
      </div>

      <div className={styles.cast_name_wrapp}>
        <span>
          <p>{cast.original_name}</p>
        </span>

        <span>
          <p>{cast.character}</p>
        </span>
      </div>
    </li>
  )
}

export default CastCard
