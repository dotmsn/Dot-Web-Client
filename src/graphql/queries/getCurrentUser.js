import graphql from 'babel-plugin-relay/macro';

export const getCurrentUser = graphql`
  query getCurrentUserQuery {
    getCurrentUser {
      _id
      bio
      displayName
      email
      privateKey
    }
  }
`;
