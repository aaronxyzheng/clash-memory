import styles from "./ScorePanel.module.css";

function ScorePanel({ score, total, highScore }) {
    return (
        <div className={styles.panel}>
            <div className={styles.row}>
                <span className={styles.label}>Score</span>
                <span className={styles.value}>{score} / {total}</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.row}>
                <span className={styles.label}>Best</span>
                <span className={`${styles.value} ${styles.best}`}>{highScore}</span>
            </div>
        </div>
    );
}

export default ScorePanel;
