import * as React from 'react';
import { connect } from 'react-redux';

import Layout from './layout';
import Router from './router';

class App extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <Router {...this.props} />
      </Layout>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    example: state.example,
  };
};

export default connect(mapState, null)(App);
