import * as React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return this.props.example;
  }
}

const mapState = (state) => {
  return {
    example: state.example,
  };
};

export default connect(mapState, null)(Home);
