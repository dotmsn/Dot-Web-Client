import * as React from 'react';
import { validateSession } from './actions/auth.actions';
import { connect } from 'react-redux';

import Layout from './layout';
import Router from './router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      logged: false,
      user: null,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const token = window.localStorage.getItem('accessToken');

    if (token) {
      dispatch(validateSession()).then((user) => {
        this.user = user;
        this.logged = true;
        this.checked = true;
      });
    } else {
      this.setState({ checked: true, logged: false });
    }
  }

  render() {
    if (this.state.checked) {
      return (
        <Layout>
          <Router />
        </Layout>
      );
    } else {
      return 'Loading...';
    }
  }
}

function mapStateToProps(state) {
  const { isLoggedIn, error } = state.auth;
  return {
    isLoggedIn,
    error,
  };
}

export default connect(mapStateToProps)(App);
