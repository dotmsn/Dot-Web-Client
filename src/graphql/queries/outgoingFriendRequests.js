import graphql from 'babel-plugin-relay/macro';

export const outgoingFriendRequests = graphql`
  query outgoingFriendRequestsQuery {
    outgoingFriendRequests {
      _id
      from
      to
    }
  }
`;
