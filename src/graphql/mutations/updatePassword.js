import graphql from 'babel-plugin-relay/macro';

export const updatePassword = graphql`
  mutation updatePasswordMutation($payload: UpdatePasswordDto!) {
    updatePassword(payload: $payload) {
      _id
    }
  }
`;
