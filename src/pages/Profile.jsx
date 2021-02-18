import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Profile from '../components/profile/Profile';
import ProfileActions from '../components/profile/ProfileActions';
import ProfileGallery from '../components/profile/ProfileGallery';

import { QueryRenderer } from 'react-relay';
import { fetchUserQuery } from '../graphql';
import { initEnvironment } from '../relay/environment.js';

const environment = initEnvironment();

export default function ProfilePage({user, ...props}) {
    const username = window.location.pathname.split("/")[1].split("@")[1];
    console.log("Fetching for user with username: " + username);

    return (
        <div>
            <Header title="Profile" {...props} />

            <QueryRenderer
                environment={environment}
                query={fetchUserQuery}
                variables={{username}}
                render={({ error, result }) => {

                    if (error) {
                        const message = error.source.errors[0].message;
                        console.error("An error has ocurred: " + message);
                        return (
                            <Profile
                                displayname={"Unknown user"}
                                username={username}
                                status={message}
                            />
                        )
                    }

                    const fetchedUser = user;
                    const { displayname, bio, id } = fetchedUser;

                    return (
                        <div>
                            <Profile
                                username={username}
                                displayname={displayname || username}
                                status={bio || "No bio provided"}
                            />

                            <ProfileActions own={user.id === id}  />
                            <ProfileGallery />
                        </div>
                    )
                }}
            />
            <Navbar/>
        </div>
    );
}
