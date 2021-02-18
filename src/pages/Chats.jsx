import EmptyPanel from "../components/layout/EmptyPanel";
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import ChatList from '../components/chat/ChatList';

import ErrorPanel from "../components/layout/ErrorPanel";
import LoadingPanel from "../components/layout/LoadingPanel";

import { QueryRenderer } from 'react-relay';
import { listChannelsQuery } from '../graphql';
import { initEnvironment } from '../relay/environment.js';

const environment = initEnvironment();

const Chats = (pageProps) => {
    return (
        <div>
            <Header title="Chats" {...pageProps} />
            <div className="container">
                <QueryRenderer
                    environment={environment}
                    query={listChannelsQuery}
                    render={({ error, props }) => {
                        if (error) {
                            return <ErrorPanel />;
                        }

                        if (!props) {
                            return <LoadingPanel />;
                        }

                        const chats = props.listChannels;

                        if (chats.length === 0) {
                            return  <EmptyPanel title="No chats" subtitle="Try starting a new conversation" icon="/icons/mailbox.svg"/>
                        } else {
                            return <ChatList chats={props.listChannels} {...pageProps}  />;
                        }
                    }}
                />
            </div>
            <Navbar {...pageProps} />
        </div>
    );
};

export default Chats;
