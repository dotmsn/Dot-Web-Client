import EmptyPanel from "../components/layout/EmptyPanel";
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
// import ContactList from '../components/contacts/ContactList';

export default function Contacts(pageProps) {
    const props = { ...pageProps, colormode: 'dark' };

    return (
        <div>
            <Header title="Contacts" {...props} />
            <div className="container">
                <EmptyPanel title="No contacts" subtitle="Try adding new friends" icon="/icons/contacts.svg"/>
            </div>
            <Navbar {...props} />
        </div>
    );
}

//                 <ContactList {...props} />