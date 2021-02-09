import LoginForm from '../components/auth/LoginForm';
import Header from '../components/layout/Header';
import Title from '../components/layout/Title';

import { Link } from 'react-router-dom';

export default function Login(props) {
    return (
        <div>
            <script src="https://www.google.com/recaptcha/api.js?render=6LccE00aAAAAAPQoyNh23LoAaCzzsF-YDj8IkgTw"></script>

            <Header title="Login" {...props} />
            <Title
                title="Hello, Welcome"
                subtitle="Please sign in with your Account"
                {...props}
            />
            <LoginForm {...props} />

            <div className="divider">
                <span className="text-center text-muted">
                    You don't have an account?
                </span>

                <Link to="/register" className="text-center">
                    Register
                </Link>
            </div>
        </div>
    );
}
