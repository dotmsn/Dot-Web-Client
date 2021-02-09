import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import ContactList from '../components/contacts/ContactList';

export default function Contacts(pageProps) {
    const props = { ...pageProps, colormode: 'dark' };

    return (
        <div>
            <Header title="Contacts" {...props} />
            <div className="container">
                <ContactList {...props} />
            </div>
            <Navbar {...props} />
        </div>
    );
}
