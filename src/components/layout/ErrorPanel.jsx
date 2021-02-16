import styles from "./empty.module.sass";

export default function ErrorPanel () { 
    return (
        <div className={styles.emptyContainer}>
            <img className={styles.emptyLogo} src="/icons/error.svg" alt="panel icon" />
            <h1 className={styles.emptyTitle}>Oops...</h1>
            <p className={styles.emptySubtitle}>Something was wrong</p>
            <button className={styles.emptyButton} onClick={() => { window.location.reload() }}>Retry</button>
        </div>
    )
}