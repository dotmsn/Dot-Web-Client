/* Dependencies and libraries */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages */
import Home from './pages/home';

import Login from './pages/auth/login';
import Register from './pages/auth/register';

import Chat from './pages/messages/chat';

// Component
export default function Router() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
