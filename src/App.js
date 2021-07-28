import * as React from 'react';

import Layout from './layout';
import Router from './router';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Router />
      </Layout>
    );
  }
}
