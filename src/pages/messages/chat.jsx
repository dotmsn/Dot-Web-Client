import * as React from 'react';
import Header from '../../components/layout/header/header';

export default class Login extends React.Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  render() {
    return (
      <React.Fragment>
        <Header title="Username" description="Online" />
        <div className="container"></div>
      </React.Fragment>
    );
  }
}
