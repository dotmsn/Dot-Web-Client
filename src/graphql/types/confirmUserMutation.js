import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation confirmUserMutation($token: String!) {
        confirmUser(token: $token) {
            _id
            username
        }
    }
`;
