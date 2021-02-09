import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ Component, authenticated, ...props }) => (
    <Route
        {...props}
        render={(props) =>
            authenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

const { object, bool, string, func } = PropTypes;

ProtectedRoute.propTypes = {
    Component: func.isRequired,
    exact: bool,
    path: string.isRequired,
    authenticated: bool.isRequired,
    location: object,
};

export default ProtectedRoute;
