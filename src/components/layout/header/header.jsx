import styles from './header.module.sass';

import { IconButton } from '@chakra-ui/button';
import { BiArrowBack } from 'react-icons/bi';
import { IoHelpOutline } from 'react-icons/io5';
import { Text } from '@chakra-ui/react';

export default function Header({ title, description, ghost = 'false' }) {
  return (
    <div
      className={styles['header']}
      style={{
        borderBottom: `${ghost === 'false' ? '1px solid #00000018' : ''}`,
      }}
    >
      <IconButton
        variant="solid"
        background="blackAlpha.200"
        icon={<BiArrowBack className={styles['icon']} />}
      />
      <div className={styles['container']}>
        <Text className={styles['title']}>{title}</Text>
        <Text mt={2} className={styles['description']}>
          {description}
        </Text>
      </div>
      <IconButton
        variant="solid"
        background="blackAlpha.200"
        icon={<IoHelpOutline className={styles['icon']} />}
      />
    </div>
  );
}
