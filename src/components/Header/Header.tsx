import Link from "next/link"
import Image from "next/image"

import styles from "./Header.module.sass"
import LogoItem from "../LogoItem/LogoItem"

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <Link href="/films">Filmes</Link>
                    </li>

                    <li className={styles.nav_item}>
                        <Link href="/series">Séries</Link>
                    </li>

                    <LogoItem />

                    <li className={styles.nav_item}>
                        <Link href="/popular">Populares</Link>
                    </li>

                    <li className={styles.nav_item}>
                        <Link href="/watchlist">Watchlist</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
