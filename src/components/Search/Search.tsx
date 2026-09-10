"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"
import styles from "./Search.module.sass"

function Search() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const inputRef = useRef<HTMLInputElement>(null)
  const query = searchParams.get("query")

  const [openSearch, setOpenSearch] = useState<boolean>(
    !!searchParams.get("query"),
  )
  const [search, setSearch] = useState<string>(searchParams.get("query") ?? "")

  useEffect(() => {
    const input = inputRef.current

    if (query && input) {
      input.focus()

      const size = input.value.length
      input.setSelectionRange(size, size)
    }
  }, [query])

  function handleSearch(text: string) {
    setSearch(text)

    const params = new URLSearchParams(searchParams)

    if (text) {
      params.set("query", text)
    } else {
      params.delete("query")
    }

    replace(`${pathName}?${params.toString()}`)
  }

  function handleClick() {
    if (openSearch) {
      setSearch("")

      const params = new URLSearchParams(searchParams)
      params.delete("query")

      replace(`${pathName}?${params.toString()}`)
    } else {
      inputRef.current?.focus()
    }

    setOpenSearch(!openSearch)
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
            autoComplete="off"
            ref={inputRef}
            value={search}
            onChange={(txt) => handleSearch(txt.target.value)}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className={styles.search_button}
      >
        <FaSearch />
      </button>
    </div>
  )
}

export default Search
