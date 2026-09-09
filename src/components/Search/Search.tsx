"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import styles from "./Search.module.sass"

function Search() {
  const [openSearch, setOpenSearch] = useState(false)

  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  function handleSearch(text: string) {
    const params = new URLSearchParams(searchParams)

    if (text) {
      params.set("query", text)
    } else {
      params.delete("query")
    }

    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className={styles.search_container}>
      <div className={styles.search_input_container}>
        <div
          className={styles.input_wrapp}
          style={{ width: `${openSearch ? "100%" : "0%"}` }}
        >
          <input
            type="text"
            name="search"
            id="search"
            onChange={(txt) => handleSearch(txt.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpenSearch(!openSearch)}
        className={styles.search_button}
      >
        <FaSearch />
      </button>
    </div>
  )
}

export default Search
