import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { login } from '../../actions/auth.actions';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
} from '@chakra-ui/react';

class Login extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      success: null,
      error: null,
      form: {
        email: '',
        password: '',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    const { form } = this.state;

    form[name] = value;
    this.setState({
      form,
      success: null,
      error: null,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ fetching: true });

    const { form } = this.state;
    const { dispatch } = this.props;

    dispatch(login(form.email, form.password))
      .then(() => {
        this.setState({ success: 'Logged successfully' });
        setTimeout(() => {
          this.props.history.push('/');
        }, 1000 * 2);
      })
      .catch((e) => {
        this.setState({ error: e.message || e.toString(), fetching: false });
      });
  }

  render() {
    return (
      <Flex mt={10} width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          {this.state.error && (
            <Alert my={4} status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Error:</AlertTitle>
              <AlertDescription>{this.state.error}</AlertDescription>
            </Alert>
          )}
          {this.state.success && (
            <Alert my={4} status="success">
              <AlertTitle mr={2}>Success:</AlertTitle>
              <AlertDescription>{this.state.success}</AlertDescription>
            </Alert>
          )}
          <Box my={4} textAlign="left">
            <form onSubmit={this.handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />
              </FormControl>
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="*******"
                  minLength={8}
                  maxLength={256}
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                type="submit"
                disabled={this.state.fetching}
              >
                {this.state.fetching ? <Spinner /> : 'Login'}
              </Button>
            </form>
          </Box>
          <Box my={4} textAlign="center">
            <Link to="/register">Create an account</Link>
          </Box>
        </Box>
      </Flex>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn, error } = state.auth;
  return {
    isLoggedIn,
    error,
  };
}

const componentWithRouter = withRouter(Login);
export default connect(mapStateToProps)(componentWithRouter);
