import graphql from 'babel-plugin-relay/macro';

export const login = graphql`
  mutation loginMutation($payload: AuthLoginDto!) {
    login(payload: $payload) {
      accessToken
      user {
        _id
        bio
        displayName
        email
        privateKey
        publicKey
      }
    }
  }
`;
