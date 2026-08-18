import Image from "next/image"
import Link from "next/link"

import styles from "./LogoItem.module.sass"

function LogoItem() {
  return (
    <li>
      <Link href="/" className={styles.logo_link}>
        <Image
          src="/logo_v2.png"
          width={50}
          height={50}
          alt="Logo do site"
          className={styles.logo}
        />

        <div>
          <span>I</span>
          <span>N</span>
          <span>E</span>
          <span>M</span>
          <span>I</span>
          <span>D</span>
          <span>I</span>
          <span>A</span>
        </div>
      </Link>
    </li>
  )
}

export default LogoItem
