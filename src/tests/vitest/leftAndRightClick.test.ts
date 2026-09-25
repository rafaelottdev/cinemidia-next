import { describe, expect, it, vi } from "vitest"
import { leftClick } from "@/lib/leftClick"
import { rightClick } from "@/lib/rightClick"

describe("click test", () => {
  describe("left click", () => {
    it("should decrease the current index", () => {
      const setCurrentIndex = vi.fn()

      leftClick(3, setCurrentIndex)

      expect(setCurrentIndex).toHaveBeenCalledOnce()

      const updater = setCurrentIndex.mock.calls[0][0]

      expect(updater(3)).toBe(2)
    })

    it("should not call setCurrentIndex when current index is 0", () => {
      const setCurrentIndex = vi.fn()

      leftClick(0, setCurrentIndex)

      expect(setCurrentIndex).not.toHaveBeenCalled()
    })
  })

  describe("right click", () => {
    it("", () => {
      const setCurrentIndex = vi.fn()

      rightClick(1, setCurrentIndex, 5)

      expect(setCurrentIndex).toHaveBeenCalledOnce()

      const updater = setCurrentIndex.mock.calls[0][0]

      expect(updater(1)).toBe(2)
    })

    it("", () => {
      const setCurrentIndex = vi.fn()

      rightClick(5, setCurrentIndex, 5)

      expect(setCurrentIndex).not.toHaveBeenCalled()
    })
  })
})
