"use client"

import { PopularMovies } from "@/types/popularMovies"
import { Genres } from "@/types/genres"

import SliderBackground from "../SliderBackground/SliderBackground"
import SliderCover from "../SliderCover/SliderCover"
import SlideControl from "../SlideControl/SlideControl"

import { useState } from "react"

interface TmdbData {
    selectedPopularMovies: PopularMovies[]
    genresList: Genres[]
}

function HomeSlider({ selectedPopularMovies, genresList }: TmdbData) {
    let [currentIndex, setCurrentIndex] = useState<number>(0)
    let currentIndexPoster: number = currentIndex * 235
    const popularMoviesLength = Math.min(selectedPopularMovies.length, 8)

    function leftClick() {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex -= 1)
        }
    }

    function rightClick() {
        if(currentIndex < (popularMoviesLength-1)) {
            setCurrentIndex(currentIndex += 1)
        }
    }

    return (
        <>
            <SliderBackground selectedPopularMovies={selectedPopularMovies} genresList={genresList} currentIndex={currentIndex} />

            <SliderCover selectedPopularMovies={selectedPopularMovies} currentIndex={currentIndex} currentIndexPoster={currentIndexPoster} />

            <SlideControl rightClick={rightClick} leftClick={leftClick} currentIndex={currentIndex} />
        </>
    )
}

export default HomeSlider
