/* Dependencies and libraries */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages */
import Home from './pages/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

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
      </Switch>
    </React.Fragment>
  );
}
