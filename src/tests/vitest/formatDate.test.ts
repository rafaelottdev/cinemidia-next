import { describe, expect, it } from "vitest"
import formatDate from "@/lib/formatDate"

describe("format data test", () => {
  it("data test with year", () => {
    const date = formatDate("12/12/2023", true)

    expect(date).toBe("12 dezembro 2023")
  })

  it("data test without year", () => {
    const date = formatDate("12/12/2023")

    expect(date).toBe("12 de dezembro")
  })
})
