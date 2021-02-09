import Header from '../components/layout/Header';
import ChatInput from '../components/chat/ChatInput';
import Chat from '../components/chat/Chat';

export default function Channel(props) {
    return (
        <div>
            <Header title="Sammwy" subtitle="Online" />
            <div className="container">
                <Chat {...props} />
            </div>
            <ChatInput {...props} />
        </div>
    );
}
