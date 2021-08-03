import { Avatar } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import styles from './message.module.sass';

export default function Message({ content, time, own, attachment, id }) {
  return (
    <div className={styles['message']} id={id}>
      {own === 'false' && (
        <Avatar
          className={styles['avatar']}
          src="https://i.pinimg.com/originals/6f/d4/f7/6fd4f7991cada6e2fb560424981abff8.jpg"
          alt="User avatar "
          size="sm"
        />
      )}
      <div own={own} className={styles['container']}>
        {content && (
          <span own={own} className={styles['content']}>
            <ReactMarkdown className="message-container">
              {content}
            </ReactMarkdown>

            <span own={own} className={styles['time']}>
              {time}
            </span>
          </span>
        )}

        {attachment && (
          <img
            own={own}
            className={styles['attachment']}
            src={attachment}
            alt="Attachment"
          />
        )}
      </div>
    </div>
  );
}
