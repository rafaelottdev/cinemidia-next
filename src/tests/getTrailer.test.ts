import { expect, it } from "vitest"
import getTrailer from "@/lib/getTrailer"

it("should return movie trailer", async () => {
  const trailerList = {
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
