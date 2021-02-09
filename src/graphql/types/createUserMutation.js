import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation createUserMutation($payload: CreateUserInput!) {
        createUser(payload: $payload) {
            _id
            username
        }
    }
`;
