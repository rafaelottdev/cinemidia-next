import styles from "./ReleasesLoading.module.sass"

function ReleasesLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.skeleton_card}>
        <div className={styles.skeleton_img_wrapp}></div>

        <div className={styles.skeleton_data_container}>
          <div className={styles.skeleton_info_container}>
            <div></div>

            <div></div>
          </div>

          <div className={styles.skeleton_genres_container}></div>
        </div>

        <div className={styles.skeleton_release_container}></div>
      </div>

      <div className={styles.skeleton_card}>
        <div className={styles.skeleton_img_wrapp}></div>

        <div className={styles.skeleton_data_container}>
          <div className={styles.skeleton_info_container}>
            <div></div>

            <div></div>
          </div>

          <div className={styles.skeleton_genres_container}></div>
        </div>

        <div className={styles.skeleton_release_container}></div>
      </div>

      <div className={styles.skeleton_card}>
        <div className={styles.skeleton_img_wrapp}></div>

        <div className={styles.skeleton_data_container}>
          <div className={styles.skeleton_info_container}>
            <div></div>

            <div></div>
          </div>

          <div className={styles.skeleton_genres_container}></div>
        </div>

        <div className={styles.skeleton_release_container}></div>
      </div>

      <div className={styles.skeleton_card}>
        <div className={styles.skeleton_img_wrapp}></div>

        <div className={styles.skeleton_data_container}>
          <div className={styles.skeleton_info_container}>
            <div></div>

            <div></div>
          </div>

          <div className={styles.skeleton_genres_container}></div>
        </div>

        <div className={styles.skeleton_release_container}></div>
      </div>
    </div>
  )
}

export default ReleasesLoading
