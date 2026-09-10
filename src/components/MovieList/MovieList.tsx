"use client"

import { useEffect, useState } from "react"
import getMovies from "@/lib/getMovies"
import type { PopularMovies } from "@/types/popularMovies"
import CatalogCard from "../CatalogCard/CatalogCard"
import CatalogLoading from "../loadings/CatalogLoading/CatalogLoading"

function MovieList({ query }: { query: string }) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [movies, setMovies] = useState<PopularMovies[]>([])
  const [searchMovie, setSearchMovie] = useState<PopularMovies[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieDetails = await getMovies("search", 1, `query=${query}`)
        setSearchMovie(movieDetails)
      } catch (error) {
        console.log(`erro da pesquisa de filmes: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    if (!query) {
      setSearchMovie([])
      setMovies([])
      return
    }

    getMovieDetails()
  }, [query])

  useEffect(() => {
    async function getMovieList() {
      try {
        setLoading(true)

        const movieList = await getMovies("discover", currentPage)

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
        console.log(`Erro da requisição dos filmes: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    if (!query) {
      getMovieList()
    }
  }, [currentPage, query])

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
      {query ? (
        searchMovie.length > 0 ? (
          searchMovie.map((movie: PopularMovies) => (
            <CatalogCard key={movie.id} catalog={movie} />
          ))
        ) : (
          <li className="search_not_found">
            Pesquisa não encontrada: "{query}"
          </li>
        )
      ) : (
        movies.map((movie: PopularMovies) => (
          <CatalogCard key={movie.id} catalog={movie} />
        ))
      )}

      {loading && <CatalogLoading />}

      {!query && <li id="sentinel"></li>}
    </ul>
  )
}

export default MovieList
