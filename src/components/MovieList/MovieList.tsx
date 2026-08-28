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
    async function getMovieList() {
      try {
        setLoading(true)

        const movieList = await getMovies(currentPage)

        setMovies((previousMovies) => {
          const newMovies = movieList.filter(
            (movie: PopularMovies) =>
              !previousMovies.some(
                (previousMovies) => previousMovies.id === movie.id,
              ),
          )

          return [...previousMovies, ...newMovies]
        })
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getMovieList()
  }, [currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !loading) {
        setCurrentPage((previousPage) => previousPage + 1)
      }
    })

    const sentinel = document.querySelector("#sentinel")

    if (sentinel) intersectionObserver.observe(sentinel)

    return () => intersectionObserver.disconnect()
  }, [loading])

  return (
    <ul className="catalog_list">
      {movies.map((movie: PopularMovies) => (
        <CatalogCard key={movie.id} catalog={movie} />
      ))}

      {loading && <CatalogLoading />}

      <li id="sentinel"></li>
    </ul>
  )
}

export default MovieList
