import Styles from './navbar.module.sass';
import NavItem from './NavItem';

import {
    AiOutlineMessage,
    AiOutlineSetting,
    AiOutlineContacts,
    AiOutlineSearch,
    AiOutlineProfile,
} from 'react-icons/ai';

function Navbar({ colormode }) {
    return (
        <div colormode={colormode} className={Styles.navbar}>
            <NavItem href="/chats" label="Chats" Icon={AiOutlineMessage} />
            <NavItem
                href="/contacts"
                label="Contacts"
                Icon={AiOutlineContacts}
            />
            <NavItem href="/search" label="Search" Icon={AiOutlineSearch} />
            <NavItem href="/profile" label="Profile" Icon={AiOutlineProfile} />
            <NavItem
                href="/settings"
                label="Settings"
                Icon={AiOutlineSetting}
            />
        </div>
    );
}

export default Navbar;
