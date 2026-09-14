"use client"

import { useEffect, useRef, useState } from "react"
import { leftClick } from "@/lib/leftClick"
import { rightClick } from "@/lib/rightClick"
import type { Genres } from "@/types/genres"
import type { PopularMovies } from "@/types/popularMovies"
import SlideControl from "../SlideControl/SlideControl"
import SliderBackground from "../SliderBackground/SliderBackground"
import SliderCover from "../SliderCover/SliderCover"

interface TmdbData {
  selectedPopularMovies: PopularMovies[]
  genresList: Genres[]
}

function HomeSlider({ selectedPopularMovies, genresList }: TmdbData) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentPosterWidth, setCurrentPosterWidth] = useState<number>(235)
  const currentIndexPoster: number = currentIndex * currentPosterWidth
  const popularMoviesLength = selectedPopularMovies.length - 1
  const [browserWidth, setBrowserWidth] = useState<number>()

  const touchStartX = useRef<number>(0)

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.changedTouches[0].screenX
  }

  function handleTouchEnd(event: React.TouchEvent) {
    const touchEndX = event.changedTouches[0].screenX

    const diff = touchStartX.current - touchEndX

    if (diff > 50) {
      rightClick(currentIndex, setCurrentIndex, popularMoviesLength)
    } else if (diff < -50) {
      leftClick(currentIndex, setCurrentIndex)
    }
  }

  useEffect(() => {
    function handleResize(event: UIEvent) {
      const currentWindow = event.target as Window

      setBrowserWidth(currentWindow.innerWidth)
    }

    const initialBroserSize = window.innerWidth

    if (initialBroserSize > 992) {
      setCurrentPosterWidth(235)
    } else {
      setCurrentPosterWidth(150)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (browserWidth && browserWidth > 992) {
      setCurrentPosterWidth(235)
    } else if (browserWidth && browserWidth <= 992) {
      setCurrentPosterWidth(150)
    }
  }, [browserWidth])

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <SliderBackground
        selectedPopularMovies={selectedPopularMovies}
        genresList={genresList}
        currentIndex={currentIndex}
      />

      <SliderCover
        selectedPopularMovies={selectedPopularMovies}
        currentIndex={currentIndex}
        currentIndexPoster={currentIndexPoster}
      />

      <SlideControl
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        popularMoviesLength={popularMoviesLength}
      />
    </div>
  )
}

export default HomeSlider
