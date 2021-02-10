import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query currentUserQuery {
        currentUser {
            _id
            username
            confirmed
        }
    }
`;
