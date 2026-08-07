import Home from "@/components/Home/Home"
import HomeLoading from "@/components/loadings/HomeLoading/HomeLoading"
import Releases from "@/components/Releases/Releases"
import { Suspense } from "react"

function Page() {
  return (
    <>
      <Suspense fallback={<HomeLoading />}>
        <Home />
      </Suspense>

      <Releases />
    </>
  )
}

export default Page
