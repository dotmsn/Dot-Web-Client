import graphql from 'babel-plugin-relay/macro';

export const createUser = graphql`
  mutation createUserMutation($payload: CreateUserDto!) {
    createUser(payload: $payload) {
      _id
      bio
      displayName
      email
      privateKey
      publicKey
    }
  }
`;
