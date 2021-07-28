import * as React from 'react';
import { Link } from 'react-router-dom';
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

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      error: null,
      success: null,
      form: {
        email: '',
        displayName: '',
        password: '',
        confirmPassword: '',
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

  async handleSubmit(event) {
    event.preventDefault();
    const form = this.state.form;

    if (form.password !== form.confirmPassword) {
      this.setState({ error: "Password didn't match." });
      return;
    }

    this.setState({ fetching: true });
    setTimeout(() => {
      this.setState({
        fetching: false,
        success: 'Logged successfully.',
      });
    }, 1000 * 2);
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
                <FormLabel>Display Name</FormLabel>
                <Input
                  name="displayName"
                  type="text"
                  placeholder="Your public name"
                  onChange={this.handleInputChange}
                  value={this.state.displayName}
                />
              </FormControl>
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
              <FormControl mt={6} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="*******"
                  minLength={8}
                  maxLength={256}
                  onChange={this.handleInputChange}
                  value={this.state.confirmPassword}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                type="submit"
                disabled={this.state.fetching}
              >
                {this.state.fetching ? <Spinner /> : 'Register'}
              </Button>
            </form>
          </Box>
          <Box my={4} textAlign="center">
            <Link to="/login">Already registered? Sign in</Link>
          </Box>
        </Box>
      </Flex>
    );
  }
}
