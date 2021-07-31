import graphql from 'babel-plugin-relay/macro';

export const createFriendRequest = graphql`
  mutation createFriendRequestMutation($target: String!) {
    createFriendRequest(target: $target) {
      _id
      from
      to
    }
  }
`;
