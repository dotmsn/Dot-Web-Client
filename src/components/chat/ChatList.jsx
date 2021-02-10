import styles from './chat.module.sass';

import ChatItem from './ChatItem';

function ChatList({ chats, user }) {
    var chatList = chats.map(function (chat) {
        const { _id, participants, type } = chat;

        const username = type === "dm" ? (participants[0]._id === user._id ? participants[1].username : participants[0].username) : "Group"
        const displayname = type === "dm" ? (participants[0]._id === user._id ? participants[1].displayname || username : participants[0].displayname || username) : "Group"

        return (
            <ChatItem
                avatar=""
                displayname={displayname}
                username={username}
                state="online"
                lastmessage="hello uwu"
                channel={_id}
                own="true"
            />
        );
    });

    return (
        <div className={styles['chat-list']}>
            {chatList.length === 0 ? <span>No chats founded</span> : chatList}
        </div>
    );
}

export default ChatList;
