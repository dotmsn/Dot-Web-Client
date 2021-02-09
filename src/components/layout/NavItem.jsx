import Styles from './navbar.module.sass';
import { IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavItem({ href, label, Icon }) {
    const path = process.browser ? window.location.pathname : null;

    return (
        <Link className={Styles['link']} to={href}>
            <div
                className={Styles['nav-button']}
                state={path === href ? 'active' : 'none'}
            >
                <IconButton
                    size="lg"
                    arial-label={label}
                    icon={<Icon className={Styles['nav-icon']} />}
                />
                <span className={Styles['nav-label']}>{label}</span>
            </div>
        </Link>
    );
}

export default NavItem;
