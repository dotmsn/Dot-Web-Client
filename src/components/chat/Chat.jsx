import MessageItem from './MessageItem';
import styles from './chat.module.sass';

function Chat({ colormode }) {
    return (
        <div className={styles['chat-list']}>
            <MessageItem
                colormode={colormode}
                time="3 mins ago"
                content="Hello"
            />
            <MessageItem
                colormode={colormode}
                own="true"
                time="2 mins ago"
                content="Howdy!"
            />
            <MessageItem
                colormode={colormode}
                time="1 min ago"
                content="What are you doing?"
            />
            <MessageItem
                colormode={colormode}
                own="true"
                time="now"
                content="Nothing for now, and you?"
            />
        </div>
    );
}

export default Chat;
