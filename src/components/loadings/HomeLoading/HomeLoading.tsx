import styles from "./HomeLoading.module.sass"

function HomeLoading() {
    return (
        <div className={styles.loading}>
            <div className={styles.skeleton_background}>
                <div className={styles.skeleton_movie_info}>
                    <div className={styles.skeleton_title}></div>

                    <div className={styles.skeleton_data}></div>
                </div>
            </div>

            <div className={styles.skeleton_cover}>
                <div></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>
            </div>

            <div className={styles.skeleton_slide_control}>
                <div></div>

                <div></div>
            </div>
        </div>
    )
}

export default HomeLoading
