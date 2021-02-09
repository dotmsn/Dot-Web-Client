import styles from './chat.module.sass';
import { IconButton, Input } from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineFile } from 'react-icons/ai';

function ChatInput({ colormode }) {
    return (
        <div className={styles['input-container']}>
            <IconButton
                icon={<AiOutlineFile className={styles['chat-button']} />}
            />

            <Input
                colormode={colormode}
                className={styles['chat-input']}
                placeholder="Type your message here..."
            />

            <IconButton
                icon={<AiOutlineSend className={styles['chat-button']} />}
            />
        </div>
    );
}

export default ChatInput;
