"use client"

import { useEffect, useState } from "react"
import getMovies from "@/lib/getMovies"
import type { PopularMovies } from "@/types/popularMovies"
import CatalogCard from "../CatalogCard/CatalogCard"
import CatalogLoading from "../loadings/CatalogLoading/CatalogLoading"

function MovieList() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [movies, setMovies] = useState<PopularMovies[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      async function getMovieList() {
        const movieList = await getMovies(currentPage)
        setMovies((previousMovies) => [...previousMovies, ...movieList])
      }

      getMovieList()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
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

  if (loading) {
    return <CatalogLoading />
  } else {
    return (
      <ul className="catalog_list">
        {movies.map((movie: PopularMovies) => {
          const randomKey = crypto.randomUUID()

          return <CatalogCard key={randomKey} catalog={movie} />
        })}

        <li id="sentinel"></li>
      </ul>
    )
  }
}

export default MovieList
