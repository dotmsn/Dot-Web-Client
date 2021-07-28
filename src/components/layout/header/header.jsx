import styles from './header.module.sass';

import { IconButton } from '@chakra-ui/button';
import { BiArrowBack } from 'react-icons/bi';
import { IoHelpOutline } from 'react-icons/io5';

export default function Header({ title, description }) {
  return (
    <div className={styles['header']}>
      <IconButton icon={<BiArrowBack className={styles['icon']} />} />
      <div className={styles['container']}>
        <span className={styles['title']}>{title}</span>
        <span className={styles['description']}>{description}</span>
      </div>
      <IconButton icon={<IoHelpOutline className={styles['icon']} />} />
    </div>
  );
}
