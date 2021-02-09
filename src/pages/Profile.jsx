import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Profile from '../components/profile/Profile';
import ProfileActions from '../components/profile/ProfileActions';
import ProfileGallery from '../components/profile/ProfileGallery';

export default function ProfilePage(pageProps) {
    const props = { ...pageProps, colormode: 'dark' };

    return (
        <div>
            <Header title="Sammwy's Profile" {...props} />

            <Profile
                username="sammwy"
                displayname="Samiwi melon"
                status="Dot es la mejor aplicación de mensajes del mundo."
                {...props}
            />

            <ProfileActions />
            <ProfileGallery />
            <Navbar {...props} />
        </div>
    );
}
