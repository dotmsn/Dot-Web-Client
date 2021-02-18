// Providers and components
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/utils/ProtectedRoute';

// Pages
import Channel from './pages/Channel.jsx';
import Chats from './pages/Chats.jsx';
import Contacts from './pages/Contacts.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import Search from './pages/Search';
import Settings from './pages/Settings';
import Welcome from './pages/Welcome.jsx';
import Verify from './pages/Verify.jsx';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HelpAndSupport from './pages/Settings/HelpAndSupport';

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
                    <ProtectedRoute
                        path="/me"
                        exact
                        authenticated={authenticated}
                        Component={({user}) => ( <Redirect to={'@' + user.username} /> )}
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
                        path="/settings"
                        authenticated={authenticated}
                        exact
                        Component={Settings}
                    />
                    <ProtectedRoute
                        path="/settings/support"
                        authenticated={authenticated}
                        exact
                        Component={HelpAndSupport}
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
                        path="/@:username"
                        authenticated={authenticated}
                        Component={Profile}
                    />
                    <ProtectedRoute
                        path="/search"
                        authenticated={authenticated}
                        exact
                        Component={Search}
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
