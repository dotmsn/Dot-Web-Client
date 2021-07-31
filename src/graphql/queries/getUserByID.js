import graphql from 'babel-plugin-relay/macro';

export const getUserByID = graphql`
  query getUserByIDQuery($id: String!) {
    getUserByID(id: $id) {
      _id
      bio
      displayName
      publicKey
    }
  }
`;
