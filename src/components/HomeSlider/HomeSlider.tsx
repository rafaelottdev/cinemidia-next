"use client"

import { useState } from "react"
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
  const currentIndexPoster: number = currentIndex * 235
  const popularMoviesLength = selectedPopularMovies.length - 1

  return (
    <>
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
    </>
  )
}

export default HomeSlider
