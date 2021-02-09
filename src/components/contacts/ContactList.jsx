import styles from './contact.module.sass';

import ChatItem from '../chat/ChatItem';

function ContactList(props) {
    return (
        <div className={styles['contact-list']}>
            <ChatItem
                avatar=""
                displayname="Sammwy"
                username="sammwy"
                state="online"
                status="Hello, i'm using Dot Messenger"
                profile="1321312341434"
                {...props}
            />

            <ChatItem
                avatar=""
                displayname="Another Username"
                username="anotherusername"
                state="idle"
                status="Hello, i'm using Dot Messenger"
                profile="1321312341434"
                {...props}
            />

            <ChatItem
                avatar=""
                displayname="Cool User"
                username="cool_user"
                state="busy"
                status="Hello, i'm using Dot Messenger"
                profile="1321312341434"
                {...props}
            />

            <ChatItem
                avatar=""
                displayname="Testing"
                username="testing"
                state="offline"
                status="Hello, i'm using Dot Messenger"
                profile="1321312341434"
                {...props}
            />
        </div>
    );
}

export default ContactList;
