import Image from "next/image"
import tmdbData from "@/config/tmdb"
import type { Cast } from "@/types/cast"
import styles from "./CastCard.module.sass"

interface Prop {
  cast: Cast
}

function CastCard({ cast }: Prop) {
  return (
    <li className={styles.cast_item}>
      <div className={styles.cast_img_wrapp}>
        <Image
          src={`${tmdbData.TMDB_IMG_URL}/w45/${cast.profile_path}`}
          alt="filme"
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

// depois arrumar o sass, depois fazer um loading, depois arrumar o watchlist depois versão mobile
// se não tiver o trailer, se não tive a foto de perfil, se o orçamento ou bilheteria forem zero (não tiver info)
// colocar algum botão em baixo de generos? botão de like e deslike com #ffffff3e (do lado do thumbsup e down colocar o numero) ou do lado de generos?
