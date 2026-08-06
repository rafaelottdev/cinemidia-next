import Link from "next/link"
import Image from "next/image"

import styles from "./Header.module.sass"

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li>
                        <Link href="/films">Filmes</Link>
                    </li>

                    <li>
                        <Link href="/series">Séries</Link>
                    </li>

                    <li>
                        <Link href="/">
                            <Image src="/logo.png" width={50} height={50} alt="Logo do site" className={styles.logo} />
                        </Link>
                    </li>

                    <li>
                        <Link href="/popular">Populares</Link>
                    </li>

                    <li>
                        <Link href="/watchlist">Watchlist</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
