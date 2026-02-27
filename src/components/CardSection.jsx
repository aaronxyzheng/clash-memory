import styles from "./CardSection.module.css"

function CardSection({ children }) {
    return (
        <div className={styles.cardSection}>
            {children}
        </div>
    )
}

export default CardSection;