"use client"

import { PopularMovies } from "@/types/popularMovies"
import styles from "./MovieList.module.sass"
import { useEffect, useState } from "react"

interface Movies {
  movies: PopularMovies[]
}

function MovieList({ movies }: Movies) {
  let [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    })

    const sentinel = document.querySelector("#sentinel")

    if(sentinel) intersectionObserver.observe(sentinel)

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <ul>
      <div>Pagina atual: {currentPage}</div>

      {/* {
        movies.map((movie: any) => (
          <li key={movie.key}>{movie.title}</li>
        ))
      } */}

      <li id="sentinel"></li>
    </ul>
  )
}

export default MovieList
