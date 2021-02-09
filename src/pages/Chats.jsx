import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import ChatList from '../components/chat/ChatList';

const Chats = (props) => {
    return (
        <div>
            <Header title="Chats" />
            <div className="container">
                <ChatList {...props} />
            </div>
            <Navbar {...props} />
        </div>
    );
};

export default Chats;
