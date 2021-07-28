import { Box, Text } from '@chakra-ui/layout';
import styles from './profile-section.module.sass';

export default function ProfileSection({ title, children }) {
  return (
    <Box textAlign="center" width="auto" mb={6}>
      <Text fontSize="18px" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Box className={styles['children']}>{children}</Box>
    </Box>
  );
}
