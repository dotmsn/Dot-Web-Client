import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import ChatList from '../components/chat/ChatList';

import { QueryRenderer } from 'react-relay';
import { listChannelsQuery } from '../graphql';
import { initEnvironment } from '../relay/environment.js';

const environment = initEnvironment();

const Chats = (pageProps) => {
    return (
        <div>
            <Header title="Chats" />
            <div className="container">
                <QueryRenderer
                    environment={environment}
                    query={listChannelsQuery}
                    render={({ error, props }) => {
                        if (error) {
                            return <div>Error, {error.message}</div>;
                        }

                        if (!props) {
                            return <div>Loading...</div>;
                        }

                        return <ChatList chats={props.listChannels} {...pageProps}  />;
                    }}
                />
            </div>
            <Navbar {...pageProps} />
        </div>
    );
};

export default Chats;
