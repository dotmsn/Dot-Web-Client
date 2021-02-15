// Providers and components
import { Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/utils/ProtectedRoute';

// Pages
import Channel from './pages/Channel.jsx';
import Chats from './pages/Chats.jsx';
import Contacts from './pages/Contacts.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import Welcome from './pages/Welcome.jsx';
import Verify from './pages/Verify.jsx';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function App({ authenticated, checked }) {
    return (
        <BrowserRouter>
            {checked && (
                <div>
                    <ProtectedRoute
                        path="/"
                        exact
                        authenticated={authenticated}
                        Component={Welcome}
                    />
                    <Route
                        path="/channel"
                        authenticated={authenticated}
                        exact
                        Component={Channel}
                    />
                    <Route
                        path="/verify"
                        authenticated={authenticated}
                        exact
                        component={Verify}
                    />
                    <ProtectedRoute
                        path="/chats"
                        authenticated={authenticated}
                        exact
                        Component={Chats}
                    />
                    <ProtectedRoute
                        path="/contacts"
                        authenticated={authenticated}
                        exact
                        Component={Contacts}
                    />
                    <Route
                        path="/login"
                        exact
                        authenticated={authenticated}
                        component={Login}
                    />
                    <ProtectedRoute
                        path="/profile"
                        authenticated={authenticated}
                        exact
                        Component={Profile}
                    />
                    <Route
                        path="/register"
                        exact
                        authenticated={authenticated}
                        component={Register}
                    />
                </div>
            )}
        </BrowserRouter>
    );
}

const { bool } = PropTypes;

App.propTypes = {
    authenticated: bool.isRequired,
    checked: bool.isRequired,
};

const mapState = ({ session }) => ({
    checked: session.checked,
    authenticated: session.authenticated,
});

export default connect(mapState)(App);
