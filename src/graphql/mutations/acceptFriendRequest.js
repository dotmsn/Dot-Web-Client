import graphql from 'babel-plugin-relay/macro';

export const acceptFriendRequest = graphql`
  mutation acceptFriendRequestMutation($request: String!) {
    acceptFriendRequest(request: $request)
  }
`;
