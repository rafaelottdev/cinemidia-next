"use client"

import { useEffect, useState } from "react"
import getSeries from "@/lib/getSeries"
import type { Series } from "@/types/series"
import CatalogCard from "../CatalogCard/CatalogCard"

function SeriesList() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [series, setSeries] = useState<Series[]>([])

  useEffect(() => {
    async function getSeriesList() {
      const seriesList = await getSeries(currentPage)
      setSeries((previousSeries) => [...previousSeries, ...seriesList])
    }

    getSeriesList()
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
    <ul className="catalog_list">
      {series.map((serie) => {
        const randomKey = crypto.randomUUID()

        return <CatalogCard key={randomKey} catalog={serie} />
      })}

      <li id="sentinel"></li>
    </ul>
  )
}

export default SeriesList
