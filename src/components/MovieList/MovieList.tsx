"use client"

import { useEffect, useState } from "react"
import getMovies from "@/lib/getMovies"
import type { PopularMovies } from "@/types/popularMovies"
import Card from "../Card/Card"

import styles from "./MovieList.module.sass"

function MovieList() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [movies, setMovies] = useState<PopularMovies[]>([])

  useEffect(() => {
    async function getMovieList() {
      const movieList = await getMovies(currentPage)
      setMovies((previousMovies) => [...previousMovies, ...movieList])
    }

    getMovieList()
  }, [currentPage])

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
    <ul className={styles.movie_list}>
      {movies.map((movie: PopularMovies) => {
        const randomKey = crypto.randomUUID()

        return <Card key={randomKey} movie={movie} />
      })}

      <li id="sentinel"></li>
    </ul>
  )
}

export default MovieList
