import styles from "./MediaDetailsLoading.module.sass"

function MediaDetailsLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.left_container_loading}>
        <div className={styles.top_wrapp_loading}>
          <div className={styles.poster_loading}></div>

          <div className={styles.movie_data_loading}>
            <div className={styles.title_loading}></div>

            <div className={styles.info_list_loading}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className={styles.genres_loading}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className={styles.bottom_wrapp_loading}>
          <div className={styles.synopsis_loading}></div>

          <div className={styles.movie_info_loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className={styles.right_container_loading}>
        <div className={styles.cast_loading_wrapp}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.trailer_loading}></div>
      </div>
    </div>
  )
}

export default MediaDetailsLoading
