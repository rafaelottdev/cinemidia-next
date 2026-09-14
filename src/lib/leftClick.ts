export function leftClick(
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
) {
  if (currentIndex > 0) {
    setCurrentIndex((index: number) => index - 1)
  }
}
