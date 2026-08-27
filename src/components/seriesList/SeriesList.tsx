"use client"

import { useEffect, useState } from "react"
import getSeries from "@/lib/getSeries"
import type { Series } from "@/types/series"
import CatalogCard from "../CatalogCard/CatalogCard"
import CatalogLoading from "../loadings/CatalogLoading/CatalogLoading"

function SeriesList() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [series, setSeries] = useState<Series[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    try {
      async function getSeriesList() {
        const seriesList = await getSeries(currentPage)
        setSeries((previousSeries) => [...previousSeries, ...seriesList])
      }

      getSeriesList()
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
        {series.map((serie) => {
          const randomKey = crypto.randomUUID()

          return <CatalogCard key={randomKey} catalog={serie} />
        })}

        <li id="sentinel"></li>
      </ul>
    )
  }
}

export default SeriesList
