import { Avatar } from '@chakra-ui/react';
import styles from './chat.module.sass';

function MessageItem({ own, content, time, colormode }) {
    return (
        <div className={styles['chat-bubble']}>
            {own == null && <Avatar className={styles['message-avatar']} />}
            <div own={own} className={styles['message-body']}>
                <span
                    own={own}
                    colormode={colormode}
                    className={styles['message-content']}
                >
                    {content}
                </span>

                <span className={styles['message-date']}>{time}</span>
            </div>
        </div>
    );
}

export default MessageItem;
