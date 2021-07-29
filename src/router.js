/* Dependencies and libraries */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages */
import Home from './pages/home';

import Login from './pages/auth/login';
import Register from './pages/auth/register';

import Chat from './pages/messages/chat';

import Profile from './pages/profile/profile';

// Component
export default function Router(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Home {...props} />
        </Route>

        <Route exact path="/login">
          <Login {...props} />
        </Route>
        <Route exact path="/register">
          <Register {...props} />
        </Route>

        <Route exact path="/chat">
          <Chat {...props} />
        </Route>

        <Route exact path="/profile">
          <Profile {...props} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
