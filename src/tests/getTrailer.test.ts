import { expect, it } from "vitest"
import getTrailer from "@/lib/getTrailer"
import type { Trailers } from "@/types/trailers"

it("should return movie trailer", async () => {
  const trailerList: Trailers = {
    name: "name 1",
    key: "key 1",
    site: "YouTube",
    size: 1,
    type: "Trailer",
    official: true,
    published_at: "string",
    id: "string",
  }

  const trailer = await getTrailer("movie", 1)

  expect(trailer).toEqual(trailerList)
})
