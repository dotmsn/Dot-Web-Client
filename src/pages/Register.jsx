import RegisterForm from '../components/auth/RegisterForm';
import Header from '../components/layout/Header';
import Title from '../components/layout/Title';

import { Link } from 'react-router-dom';

export default function Register(props) {
    return (
        <div>
            <script src="https://www.google.com/recaptcha/api.js?render=6LccE00aAAAAAPQoyNh23LoAaCzzsF-YDj8IkgTw"></script>

            <Header title="Register" {...props} />
            <Title
                title="Howdy, Welcome"
                subtitle="Create your account to use Dot Messenger."
                {...props}
            />
            <RegisterForm {...props} />

            <div className="divider">
                <span className="text-center text-muted">
                    You already have an account?
                </span>

                <Link to="/login" className="text-center">
                    Sign in
                </Link>
            </div>
        </div>
    );
}
