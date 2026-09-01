"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { FaRegBookmark } from "react-icons/fa"
import { ImFire } from "react-icons/im"
import { LuClapperboard, LuTv } from "react-icons/lu"
import LogoItem from "../LogoItem/LogoItem"
import styles from "./Header.module.sass"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathName = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 0)
  }, [])

  useEffect(() => {
    if (window.scrollY > 0) {
      setScrolled(true)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link
              href="/movies"
              className={`
                ${styles.base_page_link_btn}
                ${pathName === "/movies" ? styles.selected : styles.page_link_btn}
              `}
            >
              <span>Filmes</span>

              <span>
                <LuClapperboard />
              </span>
            </Link>
          </li>

          <li className={styles.nav_item}>
            <Link
              href="/series"
              className={`
                ${styles.base_page_link_btn}
                ${pathName === "/series" ? styles.selected : styles.page_link_btn}
              `}
            >
              <span>Séries</span>

              <span>
                <LuTv />
              </span>
            </Link>
          </li>

          <LogoItem />

          <li className={styles.nav_item}>
            <Link
              href="/popular"
              className={`
                ${styles.base_page_link_btn}
                ${pathName === "/popular" ? styles.selected : styles.page_link_btn}
              `}
            >
              <span>Populares</span>

              <span>
                <ImFire />
              </span>
            </Link>
          </li>

          <li className={styles.nav_item}>
            <Link
              href="/watchlist"
              className={`
                ${styles.base_page_link_btn}
                ${pathName === "/watchlist" ? styles.selected : styles.page_link_btn}
              `}
            >
              <span>Watchlist</span>

              <span>
                <FaRegBookmark />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
