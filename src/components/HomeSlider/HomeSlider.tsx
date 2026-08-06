"use client"

import { PopularMovies } from "@/types/popularMovies"
import { Genres } from "@/types/genres"

import SliderBackground from "../SliderBackground/SliderBackground"
import SliderCover from "../SliderCover/SliderCover"
import SlideControl from "../SlideControl/SlideControl"

import { useEffect, useState } from "react"

interface TmdbData {
    selectedPopularMovies: PopularMovies[]
    genresList: Genres[]
}

function HomeSlider({ selectedPopularMovies, genresList }: TmdbData) {
    let [currentIndex, setCurrentIndex] = useState<number>(0)
    let [currentWindowWidth, setCurrentWindowWidth] = useState<number>(0)
    const popularMoviesLength = Math.min(selectedPopularMovies.length, 8)

    useEffect(() => {
        function updateWindowWidth() {
            setCurrentWindowWidth(window.innerWidth)
        }

        updateWindowWidth()
        window.addEventListener("resize", updateWindowWidth)


        return () => window.removeEventListener("resize", updateWindowWidth)
    }, [])

    function leftClick() {
        // if(currentIndex > 0) {
        // }
    }

    function rightClick() {
        // if(currentIndex < 8) {
        // }
    }

    return (
        <>
            <SliderBackground selectedPopularMovies={selectedPopularMovies} genresList={genresList} />

            <SliderCover selectedPopularMovies={selectedPopularMovies} />

            <SlideControl rightClick={rightClick} leftClick={leftClick} />

            {currentWindowWidth}
        </>
    )
}

export default HomeSlider
