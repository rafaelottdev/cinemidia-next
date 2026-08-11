"use client"

import Link from "next/link"

import styles from "./Header.module.sass"
import LogoItem from "../LogoItem/LogoItem"

import { LuClapperboard } from "react-icons/lu"
import { LuTv } from "react-icons/lu"
import { ImFire } from "react-icons/im"
import { FaRegBookmark } from "react-icons/fa"
import { useEffect, useState } from "react"

function Header() {
    const [scrolled, setScrolled] = useState(false)

    function handleScroll() {
        setScrolled(window.scrollY > 0)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <Link href="/movies">
                            <span>Filmes</span>

                            <span>
                                <LuClapperboard />
                            </span>
                        </Link>
                    </li>

                    <li className={styles.nav_item}>
                        <Link href="/series">
                            <span>Séries</span>

                            <span>
                                <LuTv />
                            </span>
                        </Link>
                    </li>

                    <LogoItem />

                    <li className={styles.nav_item}>
                        <Link href="/popular">
                            <span>Populares</span>

                            <span>
                                <ImFire />
                            </span>
                        </Link>
                    </li>

                    <li className={styles.nav_item}>
                        <Link href="/watchlist">
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
