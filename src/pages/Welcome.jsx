import Brand from '../components/layout/Brand';
import HeroLogo from '../components/layout/HeroLogo';

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
        </div>
    );
}
