import styles from './chat.module.sass';
import { AiOutlineCheck } from 'react-icons/ai';
import { Avatar, Text, useColorModeValue } from '@chakra-ui/react';

function ChatItem({
    avatar,
    username,
    displayname,
    state,
    lastmessage,
    count,
    own,
    status,
    channel,
    profile,
}) {
    const usernameColor = useColorModeValue('gray.300', 'gray.200');
    const statusOrMessageColor = useColorModeValue('gray.200', 'gray.100');

    return (
        <a href={channel ? `/channel/${channel}` : `/profile/${profile}`}>
            <div className={styles['chat-item']}>
                <Avatar className={styles['chat-avatar']}>
                    <div className={styles['badge-messages']}>
                        {count && (
                            <span className={styles['count']}>{count}</span>
                        )}
                    </div>
                    <div className={styles['badge-' + state]} />
                </Avatar>

                <div className={styles['chat-info']}>
                    <Text className={styles['chat-displayname']} fontSize="xl">
                        {displayname}
                    </Text>

                    <Text
                        color={usernameColor}
                        className={styles['chat-username']}
                        fontSize="sm"
                    >
                        @{username}
                    </Text>

                    <Text
                        color={statusOrMessageColor}
                        className={styles['chat-last-message']}
                        fontSize="ml"
                    >
                        {own && <AiOutlineCheck className={styles['check']} />}
                        {lastmessage || status}
                    </Text>
                </div>
            </div>
        </a>
    );
}

export default ChatItem;
