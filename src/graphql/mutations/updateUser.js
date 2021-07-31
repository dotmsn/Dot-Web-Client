import graphql from 'babel-plugin-relay/macro';

export const updateUser = graphql`
  mutation updateUserMutation($payload: UpdateUserDto!) {
    updateUser(payload: $payload) {
      _id
      bio
      displayName
      email
    }
  }
`;
