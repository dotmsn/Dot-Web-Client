import graphql from 'babel-plugin-relay/macro';

export const deleteFriendRequest = graphql`
  mutation deleteFriendRequestMutation($request: String!) {
    deleteFriendRequest(request: $request)
  }
`;
