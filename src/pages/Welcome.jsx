import Brand from '../components/layout/Brand';
import HeroLogo from '../components/layout/HeroLogo';
import { Redirect } from 'react-router-dom';

export default function Welcome() {
    return (
        <div>
            <HeroLogo
                filter="normal"
                pos="center"
                size="90%"
                alt="dot logo"
                src="/logo.png"
            />
            <Brand />

            <Redirect to="/chats" />
        </div>
    );
}
