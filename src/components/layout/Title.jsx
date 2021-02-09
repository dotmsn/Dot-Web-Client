import { Box } from '@chakra-ui/react';
import styles from './title.module.sass';

function Title({ title, subtitle }) {
    return (
        <Box className={styles['title-container']}>
            <span className={styles.title}>{title}</span>
            <span className={styles.subtitle}>{subtitle}</span>
        </Box>
    );
}

export default Title;
