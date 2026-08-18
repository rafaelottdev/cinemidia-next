import { Suspense } from "react"

import Home from "@/components/Home/Home"
import HomeLoading from "@/components/loadings/HomeLoading/HomeLoading"
import ReleasesLoading from "@/components/loadings/ReleasesLoading/ReleasesLoading"
import TrailerLoading from "@/components/loadings/TrailerLoading/TrailerLoading"
import Releases from "@/components/Releases/Releases"
import Trailer from "@/components/Trailer/Trailer"

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
