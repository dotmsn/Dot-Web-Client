import styles from "./auth.module.sass";

export default function VerifyResult ({ icon, title, subtitle, redirect, history }) { 

    if (redirect && history) {
        setTimeout(() => {
            history.push(redirect);
        }, 3000);
    }

    return (
        <div className={styles.verifyContainer}>
            <img className={styles.verifyLogo} src={icon} alt="Verify result icon" />
            <h1 className={styles.verifyTitle}>{title}</h1>
            <p className={styles.verifySubtitle}>{subtitle}</p>
        </div>
    )
}