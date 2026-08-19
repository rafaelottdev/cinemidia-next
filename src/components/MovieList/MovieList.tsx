"use client"

import { useEffect, useState } from "react"
import type { PopularMovies } from "@/types/popularMovies"

// import styles from "./MovieList.module.sass"

interface Movies {
  movies: PopularMovies[]
}

function MovieList({ movies }: Movies) {
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    })

    const sentinel = document.querySelector("#sentinel")

    if (sentinel) intersectionObserver.observe(sentinel)

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <ul>
      <div>Pagina atual: {currentPage}</div>

      {movies.map((movie: PopularMovies) => (
        <li key={movie.id}>{movie.title}</li>
      ))}

      <li id="sentinel"></li>
    </ul>
  )
}

export default MovieList
