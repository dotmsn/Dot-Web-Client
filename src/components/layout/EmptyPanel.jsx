import styles from "./empty.module.sass";
import { Box, InputGroup } from '@chakra-ui/react';

export default function EmptyPanel ({ icon, title, subtitle, redirect, history, Button }) { 

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
            {
                Button && (
                    <Box className={styles['form']}>
                        <InputGroup className={styles['input-group']}>
                            { Button }
                        </InputGroup>
                    </Box>
                )
            }
        </div>
    )
}