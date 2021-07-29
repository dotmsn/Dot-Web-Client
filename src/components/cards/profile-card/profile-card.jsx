import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { BiCake, FaGenderless, BsPerson } from 'react-icons/all';
import ProfileBadge from './profile-badge';
import styles from './profile-card.module.sass';

export default function ProfileCard({ displayName, bio }) {
  return (
    <Box className={styles['container']}>
      <Box className={styles['profile-banner']}>
        <Flex className={styles['profile-info']}>
          <Avatar
            size="lg"
            src="https://i.pinimg.com/originals/6f/d4/f7/6fd4f7991cada6e2fb560424981abff8.jpg"
          />
          <Box className={styles['details']}>
            <Text
              color="purple.400"
              fontWeight="bold"
              fontSize="19px"
              className={styles['display-name']}
            >
              {displayName}
            </Text>
            <Flex className={styles['profile-bio']}>
              <p className={styles['bio']}>{bio}</p>
            </Flex>
          </Box>
        </Flex>

        <Flex mt={2} className={styles['badges']}>
          <ProfileBadge Badge={BiCake} value="23/11" />
          <ProfileBadge Badge={FaGenderless} value="She/Her" />
          <ProfileBadge Badge={BsPerson} value="19 yo" />
        </Flex>

        <Box className={styles['profile-separator']}>x</Box>
      </Box>
    </Box>
  );
}
