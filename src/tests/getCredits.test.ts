import { expect, it } from "vitest"
import getCredits from "@/lib/getCredits"

it("should return the movie cast", async () => {
  const cast = [
    {
      id: 1,
      original_name: "name 1",
      profile_path: "path 1",
      character: "character 1",
    },
    {
      id: 2,
      original_name: "name 1",
      profile_path: "path 2",
      character: "character 2",
    },
  ]

  const movieCast = await getCredits("movie", 530)

  expect(movieCast).toEqual(cast)
})
