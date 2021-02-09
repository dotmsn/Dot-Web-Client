import styles from './chat.module.sass';

import ChatItem from './ChatItem';

function ChatList() {
    return (
        <div className={styles['chat-list']}>
            <ChatItem
                avatar=""
                displayname="Sammwy"
                username="sammwy"
                state="online"
                lastmessage="hello uwu"
                channel="4234908098424321"
                own="true"
            />

            <ChatItem
                avatar=""
                displayname="Another Username"
                username="anotherusername"
                state="idle"
                lastmessage="Hey! whats up?"
                count="1"
                channel="4234908098424321"
            />

            <ChatItem
                avatar=""
                displayname="Cool User"
                username="cool_user"
                state="busy"
                lastmessage="I'm studying now."
                count="10"
                channel="4234908098424321"
            />

            <ChatItem
                avatar=""
                displayname="Testing"
                username="testing"
                state="offline"
                lastmessage="Good bye!!"
                count="99+"
                channel="4234908098424321"
            />

            <ChatItem
                avatar=""
                displayname="Sammwy"
                username="sammwy"
                state="online"
                lastmessage="hello uwu"
                own="true"
                channel="4234908098424321"
            />

            <ChatItem
                avatar=""
                displayname="Another Username"
                username="anotherusername"
                state="idle"
                lastmessage="Hey! whats up?"
                count="1"
                channel="4234908098424321"
            />

            <ChatItem
                avatar=""
                displayname="Cool User"
                username="cool_user"
                state="busy"
                lastmessage="I'm studying now."
                channel="4234908098424321"
                count="10"
            />

            <ChatItem
                avatar=""
                displayname="Testing"
                username="testing"
                state="offline"
                lastmessage="Good bye!!"
                own="true"
                count="99+"
                channel="4234908098424321"
            />

            <ChatItem
                avatar=""
                channel="4234908098424321"
                displayname="Sammwy"
                username="sammwy"
                state="online"
                lastmessage="hello uwu"
                own="false"
            />

            <ChatItem
                avatar=""
                displayname="Another Username"
                username="anotherusername"
                state="idle"
                lastmessage="Hey! whats up?"
                own="true"
                count="1"
            />

            <ChatItem
                avatar=""
                displayname="Cool User"
                username="cool_user"
                state="busy"
                lastmessage="I'm studying now."
                own="false"
                count="10"
            />

            <ChatItem
                avatar=""
                displayname="Testing"
                username="testing"
                state="offline"
                lastmessage="Good bye!!"
                own="true"
                count="99+"
            />
        </div>
    );
}

export default ChatList;
