import { Text } from '@chakra-ui/react';
import styles from './StatusCarrousel.module.sass';

function Status({ title, subtitle, image }) {
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className={styles['status']}
    >
      <div className={styles['status-info']}>
        <Text className={styles['title']}>{title}</Text>
        <Text className={styles['subtitle']}>{subtitle}</Text>
      </div>
    </div>
  );
}

export default function StatusCarrousel() {
  return (
    <div className={styles['status-list']}>
      <div className={styles['status-scroll']}>
        <Status
          image="https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHc6abe8b3f8e542939fff1000c70672e7b%2FCute-Cat-Clothes-Autumn-Winter-Pet-Clothing-For-Cat-Costume-Rabbit-Ear-Pet-Clothes-For-Cats.jpg"
          title="Gatutu"
          subtitle="Una imagen de un gatito"
        />
        <Status
          image="http://mail.tiredearth.com/images/720/Upload/2018Tyson%20LizotteAuthor/aa.jpg"
          title="Otro gato"
          subtitle="Estoy probando Dot"
        />
        <Status />
        <Status />
        <Status />
      </div>
    </div>
  );
}
