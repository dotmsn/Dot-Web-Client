import styles from './message.module.sass';

export default function Message({ content, time, own, attachment }) {
  return (
    <div className={styles['message']}>
      <div own={own} className={styles['container']}>
        {content && (
          <span own={own} className={styles['content']}>
            {content}
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

        <span className={styles['time']}>{time}</span>
      </div>
    </div>
  );
}
