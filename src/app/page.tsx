import { Suspense } from "react"

import Home from "@/components/Home/Home"
import HomeLoading from "@/components/loadings/HomeLoading/HomeLoading"

import Releases from "@/components/Releases/Releases"
import ReleasesLoading from "@/components/loadings/ReleasesLoading/ReleasesLoading"

import Trailer from "@/components/Trailer/Trailer"
import TrailerLoading from "@/components/loadings/TrailerLoading/TrailerLoading"

function Page() {
  return (
    <>
      <Suspense fallback={<HomeLoading />}>
        <Home />
      </Suspense>

      <Suspense fallback={<ReleasesLoading />}>
        <Releases />
      </Suspense>

      <Suspense fallback={<TrailerLoading />}>
        <Trailer />
      </Suspense>
    </>
  )
}

export default Page
