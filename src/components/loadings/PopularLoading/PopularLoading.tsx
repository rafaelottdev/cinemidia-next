import styles from "./PopularLoading.module.sass"

function PopularLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.card_loading}>
        <div className={styles.button_loading}></div>

        <div className={styles.data_loading}>
          <div></div>

          <div></div>

          <div></div>
        </div>

        <div className={styles.more_loading}>
          <div></div>

          <div></div>
        </div>

        <div className={styles.button_loading}></div>
      </div>
    </div>
  )
}

export default PopularLoading
