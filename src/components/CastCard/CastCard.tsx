import Image from "next/image"
import tmdbData from "@/config/tmdb"
import type { Cast } from "@/types/cast"

interface Prop {
  cast: Cast
}

function CastCard({ cast }: Prop) {
  return (
    <li>
      <div>
        <Image
          src={`${tmdbData.TMDB_IMG_URL}/w45/${cast.profile_path}`}
          alt="filme"
          width={50}
          height={60}
        />
      </div>

      <p>{cast.original_name}</p>

      <p>{cast.character}</p>
    </li>
  )
}

export default CastCard
