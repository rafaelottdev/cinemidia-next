"use client"

import { useEffect, useState } from "react"
import getSeries from "@/lib/getSeries"
import type { PopularMovies } from "@/types/popularMovies"
import type { Series } from "@/types/series"
import CatalogCard from "../CatalogCard/CatalogCard"
import CatalogLoading from "../loadings/CatalogLoading/CatalogLoading"

function SeriesList() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [series, setSeries] = useState<Series[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getSeriesList() {
      try {
        setLoading(true)

        const seriesList = await getSeries(currentPage)

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
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getSeriesList()
  }, [currentPage])

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
      {series.map((serie) => (
        <CatalogCard key={serie.id} catalog={serie} />
      ))}

      {loading && <CatalogLoading />}

      <li id="sentinel"></li>
    </ul>
  )
}

export default SeriesList
