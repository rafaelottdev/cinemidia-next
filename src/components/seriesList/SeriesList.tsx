"use client"

import { useEffect, useState } from "react"
import getSeries from "@/lib/getSeries"
import type { PopularMovies } from "@/types/popularMovies"
import type { Series } from "@/types/series"
import CatalogCard from "../CatalogCard/CatalogCard"
import CatalogLoading from "../loadings/CatalogLoading/CatalogLoading"

function SeriesList({ query }: { query: string }) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [series, setSeries] = useState<Series[]>([])
  const [searchSeries, setSearchSeries] = useState<Series[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getSeriesDetails() {
      try {
        const seriesDetails = await getSeries("search", 1, `query={${query}}`)
        setSearchSeries(seriesDetails)
      } catch (error) {
        console.log(`erro da pesquisa de series: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    if (!query) {
      setSearchSeries([])
      setSeries([])
      return
    }

    getSeriesDetails()
  }, [query])

  useEffect(() => {
    async function getSeriesList() {
      try {
        setLoading(true)

        const seriesList = await getSeries("discover", currentPage)

        setSeries((previousSeries) => {
          const newSeries = seriesList.filter(
            (series: PopularMovies) =>
              !previousSeries.some(
                (previousSeries) => previousSeries.id === series.id,
              ),
          )

          return [...previousSeries, ...newSeries]
        })
      } catch (error) {
        console.log(`Erro da requisição das series: ${error}`)
      } finally {
        setLoading(false)
      }
    }

    if (!query) {
      getSeriesList()
    }
  }, [currentPage, query])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !loading) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    })

    const sentinel = document.querySelector("#sentinel")

    if (sentinel) intersectionObserver.observe(sentinel)

    return () => intersectionObserver.disconnect()
  }, [loading])

  return (
    <ul className="catalog_list">
      {query ? (
        searchSeries.length > 0 ? (
          searchSeries.map((series: Series) => (
            <CatalogCard key={series.id} catalog={series} />
          ))
        ) : (
          <li className="search_not_found">
            Pesquisa não encontrada: "{query}"
          </li>
        )
      ) : (
        series.map((serie) => <CatalogCard key={serie.id} catalog={serie} />)
      )}

      {loading && <CatalogLoading />}

      {!query && <li id="sentinel"></li>}
    </ul>
  )
}

export default SeriesList
