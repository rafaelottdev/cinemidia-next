"use client"

import { leftClick } from "@/lib/leftClick"
import { rightClick } from "@/lib/rightClick"
import styles from "./SlideControl.module.sass"

interface SliderInfo {
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  popularMoviesLength: number
}

function SlideControl({
  currentIndex,
  setCurrentIndex,
  popularMoviesLength,
}: SliderInfo) {
  return (
    <div className={styles.slide_control_container}>
      <button
        type="button"
        className={`${styles.slide_control_button} ${currentIndex <= 0 ? styles.blocked : ""}`}
        onClick={() => leftClick(currentIndex, setCurrentIndex)}
      >
        <svg viewBox="0 0 13 13">
          <title>Seta de controle para a esquerda</title>
          <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z" />
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.slide_control_button} ${currentIndex >= 7 ? styles.blocked : ""}`}
        onClick={() =>
          rightClick(currentIndex, setCurrentIndex, popularMoviesLength)
        }
      >
        <svg viewBox="0 0 13 13" style={{ transform: "rotateY(180deg)" }}>
          <title>Seta de controle para a direita</title>
          <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z" />
        </svg>
      </button>
    </div>
  )
}

export default SlideControl
