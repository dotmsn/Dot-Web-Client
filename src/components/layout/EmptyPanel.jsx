import styles from "./empty.module.sass";

export default function EmptyPanel ({ icon, title, subtitle, redirect, history }) { 

    if (redirect && history) {
        setTimeout(() => {
            history.push(redirect);
        }, 3000);
    }

    return (
        <div className={styles.emptyContainer}>
            <img className={styles.emptyLogo} src={icon} alt="panel icon" />
            <h1 className={styles.emptyTitle}>{title}</h1>
            <p className={styles.emptySubtitle}>{subtitle}</p>
        </div>
    )
}