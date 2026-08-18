import styles from "./TrailerLoading.module.sass"

function TrailerLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.bow}></div>

      <div className={styles.skeleton_trailer_wrapp}></div>
    </div>
  )
}

export default TrailerLoading
