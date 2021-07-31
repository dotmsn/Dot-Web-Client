import graphql from 'babel-plugin-relay/macro';

export const incomingFriendRequests = graphql`
  query incomingFriendRequestsQuery {
    incomingFriendRequests {
      _id
      from
      to
    }
  }
`;
