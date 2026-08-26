export function rightClick(
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  popularMoviesLength: number,
) {
  if (currentIndex < popularMoviesLength) {
    setCurrentIndex((currentIndex: number) => currentIndex + 1)
  }
}
